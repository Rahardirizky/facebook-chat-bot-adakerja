const router = require("express").Router()
const webhook = require("./webhook")
const message = require("./message")
const summary = require("./summary")

router.use("/webhook", webhook)
router.use("/messages", message)
router.use("/summary", summary)


module.exports = router