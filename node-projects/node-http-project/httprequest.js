// importing http module
const http = require('http');


const SERVER_PORT = 9090;
const SERVER_HOSTNAME = "127.0.0.1";

// creating a server
const server = http.createServer();

// set the server to listen on listening and error events
server.on("listening", () => console.log("Server Listening"))
server.on("error", () => console.log("Error while handling request"))


// send a json response on receiving an http request
server.on("request", (req, res) => {
    const { headers } = req;
    const userAgent = headers['user-agent'];
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({
    "platform": process.platform,
    "userAgent": userAgent,
    "date": new Date(),
    "message": "Hello User, Welcome to the Tech World of John"
    }));
   })



