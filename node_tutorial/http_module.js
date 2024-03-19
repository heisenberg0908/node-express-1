//the http module in node js provides a functionality to create http servers and handle
//http requests

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home page');
    } else if (req.url === '/about') {
        res.end('About page');
    } else {
        res.end('Not Found');
    }
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
