const express = require('express');
const app = express();

const port = process.env.port || 3000;


// lets demonstrate application level middleware
app.get("/applevelmiddleware", (req, res, next) => {
    console.log("Hello");
    next();
}, (req, res) => {
    res.send(`<div>
        <h2>Expressjs - Application-level Middleware</h2>    
    </div>`);
});


// lets demostrate router level middleware
const router = express.Router();

router.use((req, res, next) => {
    console.log("Router Level Middleware");
    next();
});

app.use('/routerlevelmiddleware', router)

// lets demonstrate error handling middleware
app.get('/errorhandlingmiddleware', (req, res, next) => {
    console.log("Hello Error Handling Middleware");
    next(err);
}, (req, res) => {
    res.send(`<div><h2>Expressjs - Error Handling Middleware</h2></div>`)
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// lets demostrate third party middleware
const cookieParser = require('cookie-parser');

// load cookie parsing middleware
console.log('Loading the third party middleware function');
app.use(cookieParser());

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})
