const fs = require("fs");
const senderAction = require("./senderAction");
const sendMessage = require("./sendMessage");
const db = require("../db/db.json");
const { writeFile, readFile } = require("../utils/db");

module.exports = function processPostback(event) {
  const senderID = event.sender.id;
  const payload = event.postback.payload;
  if (payload === "Hi") {
    console.log({ db });
    readFile((error, data) => {
      const index = data.findIndex((el) => el.user === senderID);

      console.log({data, index}, ">>>>postback");
      senderAction(senderID);
      if (index >= 0) {
        sendMessage(senderID, { text: "Hi there!" });
        if (!data[index].name) {
          sendMessage(senderID, { text: "What is your first name?" });
        }
      } else {
        sendMessage(senderID, { text: "Hi" })
          .then(() =>
            sendMessage(senderID, { text: "What is your first name?" })
          )
          .then(() => {
            const newUser = {
              user: senderID,
              name: "",
              messages: [],
            };
            data.push(newUser);
            writeFile(data);
          });
      }
    });
  }
};
