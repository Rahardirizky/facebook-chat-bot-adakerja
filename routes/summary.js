const router = require("express").Router()
const SummaryController = require("../controllers/summaryController")

router.get("/", SummaryController.read)

module.exports = router