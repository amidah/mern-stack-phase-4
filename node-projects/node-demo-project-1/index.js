const http = require('http');

const SERVER_PORT = 3000;
const SERVER_HOSTNAME = "127.0.0.1";

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end('<html><body><h3>Search the Candle rather than cursing the Darkness</h3></body></html>');
});

server.listen(SERVER_PORT, SERVER_HOSTNAME, () => {
    console.log(`Server is Up and Running on host ${SERVER_HOSTNAME} and listening on port ${SERVER_PORT}`);
})