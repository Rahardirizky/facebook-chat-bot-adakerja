const { readFile } = require("../utils/db");

class SummaryController {
  static read(req, res) {
    readFile((error, data) => {
      if (error) {
        throw error
      } else {
        res.status(200).json(data.map((el) => ({
          user: el.user,
          name: el.name,
          messages: el.messages
        })))
      }
    })
  }
}

module.exports = SummaryController