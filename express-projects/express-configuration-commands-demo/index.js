var express = require('express');
var app = express()

// use app.get() and app.set()

// console.log(app.get('title'));

// console.log(app.set('title', 'Configuration Commands.'));

// console.log(app.get('title'));


// use app.enable and app.disable

// app.enable('Configuration Command - enable function');

// console.log("enable function => " + app.get('Configuration Command - enable function'));

// app.disable('Configuration Command - disable function');

// console.log("disable function => " + app.get('Configuration Command - disable function'));


// use app.enabled and app.disabled

console.log("is config command disabled for disabled function => " + app.disabled('Configuration command - disabled function'));

console.log("is config command enabled for enabled function => " + app.enabled('Configuration command - enabled function'));

app.enable('Configuration command - disabled function')

console.log("after enabling config command for enabled function => " + app.disabled('Configuration command - disabled function'));

app.enable('Configuration command - enabled function');

console.log("after enabling config command for enabled function => " + app.enabled('Configuration command - enabled function'));



