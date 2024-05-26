const http = require('http');

const url = require('url');

const SERVER_PORT = 3000;

const SERVER_HOSTNAME = "127.0.0.1";

const server = http.createServer();

server.on("listening", () => console.log("Server Listening"));

server.on("error", () => console.log("Error while handling request"));

// server.on("request", (req, res) => {
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hello this is plain text");
// });

// server.on("request", (req, res) => {
//     res.setHeader("Content-Type", "text/html");
//     res.write('<html>');
//     res.write('<body>');
//     res.write('<h3>This is an HTML Response !</h3>');
//     res.write('</body>');
//     res.write('</html>');
//     res.end();
// });

server.on("request", (req, res) => {

    const uri = req.url;

    // // Accessing request headers of incoming requests
    // const { headers } = req;

    // // Getting user-agent value from request header
    // const userAgent = headers['user-agent'];

    // // Setting the response headers
    // if(url === '/textcontent'){
    //     res.setHeader('Content-Type', 'text/plain');
    //     res.setHeader('Date', new Date());
    //     res.end("Welcome to my App!");
    // }

    // if(url === '/jsoncontent'){
   
    // res.setHeader("Content-Type", "application/json");
    // res.setHeader('Date', new Date());
    // res.end(JSON.stringify({
    //     "platform": process.platform,
    //     "userAgent": userAgent,
    //     "date": new Date(),
    //     "message": "Hellos"
    // })); 
    // }

    // if(url === '/htmlcontent'){
    //     res.setHeader('Content-Type', 'text/html');
    //     res.setHeader('Date', new Date());
    //     res.write('<html>');
    //     res.write('<body>');
    //     res.write('<h3>This is an HTML Response !</h3>');
    //     res.write('</body>');
    //     res.write('</html>');
    //     res.end();
    // }

    // if(url === '/api'){
    //     // redirect
    //     res.writeHead(302, {
    //         location: '/jsoncontent'
    //     })
    //     return res.end();

    // }
        
        const pathname = url.parse(uri).pathname;

        if(pathname === "/parserequest"){
        
            const query = url.parse(uri).query;
            console.log(`URI => ${uri}`);
            console.log(`Query => ${query}`);
            const queryObj = query.split("&").reduce((prev, next) => {
                let [key, value] = next.split("=");
                return {...prev, [key]:value}
            }, {});

            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            return res.end(JSON.stringify(queryObj));
        }
    
});

server.listen(SERVER_PORT, SERVER_HOSTNAME, () => {
    console.log(`Server is up and running on port ${SERVER_PORT} and host ${SERVER_HOSTNAME}`);
});