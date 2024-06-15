var express = require('express');
var app = express();
var path = require('path');
var PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next){
    res.render('index.ejs');
});

app.listen(PORT, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Server listening on PORT ", PORT);
    }
})
