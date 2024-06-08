// Make cluster api with the child process fork method

const http = require('http');
const { fork } = require("child_process");
const SERVER_PORT = 3000;
const SERVER_HOSTNAME = "127.0.0.1";

const server = http.createServer();
server.on("request", (req, res) => {
    if(req.url === "/compute"){
        let startDate = new Date();
        const compute = fork("./clusterapiwithoutchildprocess.js");
        compute.send("start");
        compute.on("message", (value) => {
            let  endDate = new Date();
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
                "startTime": startDate.toTimeString(),
                "endTime": endDate.toTimeString(),
                "value": `Sum from 1 to ${1e9}:${value}`
            }));
        })
    }
})

server.listen(SERVER_PORT, SERVER_HOSTNAME, () => {
    console.log(`Server is up and listening on port ${SERVER_PORT}`);
});