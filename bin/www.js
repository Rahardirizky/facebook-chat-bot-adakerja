const app = require('../app')
const http = require('http')
const server = http.createServer(app)
const PORT = 1337

server.listen(PORT, () => console.log(`Webhook is listening at http://localhost:${PORT}`))