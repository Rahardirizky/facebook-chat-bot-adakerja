const { readFile } = require("./utils/db")

const test = () => {
  readFile((error, data) => {
    console.log({error, data});
  })
}

test()