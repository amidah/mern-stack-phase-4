const { EventEmitter } = require("events");

const myEvent = new EventEmitter();

myEvent.on('event', (error) => {
    console.log("Something went wrong!!");
    console.log(error);
});

myEvent.emit('event', new Error('whoop!!'));