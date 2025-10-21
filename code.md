const http = require('http'); // Built-in module

const server = http.createServer{(req, res) => {
    // req: Incoming request (method, url, headers)
    // res: Outgoing response (write, end)

    if (req.method === 'GET' && req.url === '/') {
        // Manual route check
        res.writeHead(200, { 'Content-Type': 'text/plain' }); // Manual headers
        res.end('Hello from Raw Node.js!'); // Send body & close
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain'});
        res.end
    }
}}
