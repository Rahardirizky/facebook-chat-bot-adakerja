const router = require("express").Router()
const WebhookControllers = require("../controllers/webhookControllers")

router.post("/", WebhookControllers.post);
router.get('/', WebhookControllers.get);

module.exports = router