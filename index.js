// START YOUR SERVER HERE
const server = require('./api/server');
const port = 8000;

server.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})
