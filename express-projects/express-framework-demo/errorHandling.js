var express = require('express');
var app = express();
var PORT = 3000;

// View Engine Setup
app.set('view engine', 'ejs');

app.render('indexerror', function(err, html){
    if(err){
        console.log(err);
    }
    else{
        console.log(html);
    }
});

app.listen(PORT, function(err){
    if(err){
        console.log("Error in Server Setup");
    }
    else{
        console.log("Server listening on PORT: ", PORT);
    }
});
