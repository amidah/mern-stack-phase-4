const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/pugview', (req, res) => {
 res.render('index', { title: 'Pug Demo', message: 'Hello there! Lets understand Pug!' })
 })

app.listen(3000 , ()=>{
 console.log("server is running on port 3000");
});