const http = require('http');
const { defaultHandler, postHandler, getHandler } = require('./controller');
const connection = require('./dbconnection');

const server = http.createServer((req, res) => {
    const reqURL = req.url;
    const reqMethod = req.method;
    if (reqMethod === 'GET' && reqURL === '/api/data') {
        getHandler(req, res);
    } else if (reqMethod === 'POST' && reqURL === '/api/data') {
        postHandler(req, res);
    } else if (reqMethod === 'GET' && reqURL === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Server ok');
    } else {
        defaultHandler(req, res)
    }
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

server.listen(3000, 'localhost', () => {
    console.log('Server listening to port 3000')
})