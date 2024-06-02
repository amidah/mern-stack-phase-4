// import the events module
const { EventEmitter } = require("events");

// Create an object of EventEmitter Instance
const myEvent = new EventEmitter();

// using on function, register the listener
myEvent.on('greet', () => {
    console.log("Hello User, welcome to the tech world");
});

// execute the emit function by passing the suitable event
myEvent.emit('greet');