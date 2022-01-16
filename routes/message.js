const router = require("express").Router()
const MessageController = require("../controllers/messageController")

router.get("/", MessageController.read)
router.get("/:id", MessageController.readById)

module.exports = router