const server = require('./api/server');

const port = 5000;

server.listen(`${port}`, () => 
    console.log('Server running on http://localhost:5000')
)

// START YOUR SERVER HERE
