const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/AlienDBex';

const app = express();

mongoose.connect(url, {useNewUrlParser:true});

const con = mongoose.connection;

con.on('open', () => {
    console.log("connected...")
})

app.use(express.json());

const courseRouter = require('./routes/courses');

app.use('/courses', courseRouter);

app.listen(3000, () => {
    console.log('Server Started');
});