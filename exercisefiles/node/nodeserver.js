const http = require('http');
const url = require('url');
const { handlers } = require('./handlers');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname, query } = parsedUrl;

    const handler = handlers[pathname];
    if (handler) {
        handler(query, res);
    } else {
        res.end('Invalid route');
    }
});

server.listen(3000, () => {
    console.log('server is listening on port 3000');
});


module.exports = server;