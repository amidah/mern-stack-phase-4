var express = require('express');
var app = express();

const PORT = 3000;

// response express json method
//app.use(express.json());
// response express text method
app.use(express.text());

app.post("/", function(req, res){
    // in case of json
    //console.log("name", req.body.name);
    // in case of text
    console.log(req.body);
    res.end();
});

app.listen(PORT, function(err){
    if(err){
        console.log(err);
    }
    console.log("Server is listening on PORT", PORT);
})