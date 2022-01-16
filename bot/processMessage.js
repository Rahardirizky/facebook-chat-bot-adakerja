const { readFile, writeFile } = require("../utils/db");
const sendMessage = require("./sendMessage");
const senderAction = require("./senderAction");
const { getDistance } = require("../utils/date");

module.exports = function processMessage(event) {
  const senderID = event.sender.id;
  const senderMessage = event.message.text

  readFile((error, data) => {
    const index = data.findIndex((el) => el.user === senderID);
    
    console.log({data, index}, ">>messages");
    senderAction(senderID);
    switch (data[index].messages.length) {
      case 0:
        data[index].name = senderMessage
        sendMessage(senderID, { text: "What is your Birthday?" });
        break;
      case 1:
        data[index].birthday = senderMessage
        sendMessage(senderID, { text: "Do you want to know how many days till your next birthday?"})
        break;
      default:
        const confirm = ["yes", "yeah", "yup", "no", "nah"]
        const i = confirm.findIndex((el) => el === senderMessage)
        if (i < 3 && i >= 0) {
          const dayLeft = getDistance(data[index].birthday)

          sendMessage(senderID, { text: `There are ${dayLeft} days left until your next birthday`})
        } else {
          sendMessage(senderID, { text: "Goodbye"})
        }
        break;
    }

    data[index].messages.push(senderMessage)
    writeFile(data)
  })
}