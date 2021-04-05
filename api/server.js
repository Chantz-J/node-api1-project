// BUILD YOUR SERVER HERE
const http = require('http')
const hostname =  "localhost"
const port = 3000 

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.end("Hello World from Node\m")
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}: ${port}`)
})

module.exports = {server}; // EXPORT YOUR SERVER instead of {}
