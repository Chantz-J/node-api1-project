// BUILD YOUR SERVER HERE
const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.send('Hello from Express')
})

server.listen(5000, () => 
    console.log('Server running on http://localhost:5000')
)
module.exports = {server}; // EXPORT YOUR SERVER instead of {}
