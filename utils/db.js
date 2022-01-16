const fs = require("fs")

const writeFile = (data) => {
  fs.writeFile("../db/db.json", JSON.stringify(data, null, 2), (error, data) => {
    if(error) {
      throw error
    }
    console.log({log: "Success Save", data});
  })
}

const readFile = (cb) => {
  fs.readFile("../db/db.json", "utf-8", (error, data) => {
    if (error) {
      cb(error)
    } else {
      const entries = JSON.parse(data)
      cb(null, entries)
    }
  })
}

module.exports = {
  writeFile,
  readFile
}