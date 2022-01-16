const { readFile } = require("../utils/db");

class MessageController {
  static read(req, res) {
    readFile((error, data) => {
      if (error) {
        throw error
      } else {
        res.status(200).json(data.map((el) => el.messages))
      }
    })
  }

  static readById (req, res) {
    readFile((error, data) => {
      if (error) {
        throw error
      } else {
        const userMessage = data.find(el => el.user === req.params.id).messages

        if(userMessage) {
          res.status(200).json(userMessage)
        } else {
          res.status(404).json('Not Found')
        }
      }
    })
  }
}

module.exports = MessageController