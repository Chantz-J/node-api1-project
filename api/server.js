// BUILD YOUR SERVER HERE
const express = require('express')
const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.send('Hello from Express ^_^')
})


module.exports = {server} // EXPORT YOUR SERVER instead of {}
