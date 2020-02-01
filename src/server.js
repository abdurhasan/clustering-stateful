'use strict'
const server = require('fastify')({ logger: true })
const cors = require('cors')

server.use(cors({ origin: "*",optionsSuccessStatus: 200}))

// Register routes
server.get('/', (req, reply) => reply.send({ success: true, message: 'Hello World' }))
server.get('/all-schedule')       //// Get All running schedule








module.exports =  server