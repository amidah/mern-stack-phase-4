var express = require('express');

var app = express();

var PORT = 3000;

// Single Routing
var router = express.Router();

router.get('/', function(req, res, next){

    console.log("express.Router() is working");
    res.end();
});

app.use(router);

app.listen(PORT, function(err){
    if(err) console.error(err);
    console.log("Server listening on PORT", PORT);  
})