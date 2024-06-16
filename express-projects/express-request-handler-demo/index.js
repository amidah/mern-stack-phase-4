const express = require('express');
const res = require('express/lib/response');
const app = express();

// Request Query
app.get("/request-query", (req, res) => {
    console.log(req.query);
    return res.json({
        "message": "Request Query",
        "title": req.query.title
    })
});

// Request Params
app.get('/:id', function(req, res){
    console.log(req.params['id']);
    res.send();
});

// Request Headers and Request Get Parameters
app.get("/", function(req, res){
    console.log("Request Heders => " + req.headers);
    console.log("Request URL => " + req.url);
    console.log("Request IP => " + req.ip);
    console.log("Request Protocol => " + req.protocol);
    console.log("Request Path => " + req.path);
    // Before res.send()
    console.log("Before => " + res.headersSent);
    res.send('OK');
    // After res.send()
    console.log("After => " + res.headersSent);
})

// req.headers
// req.url
// req.ip
// req.hostname
// req.protocol --http /https
// req.path --just the path part of the url
// req.subdomains --test.sales.example.com ['test','sales]
// req.query --querystring
// req.params --/user/72 --/product/234234

app.listen(3000, err => {
    if(err){
        console.log("there was a problem", err);
        return;
    }
    console.log("listening on port 3000");
});