const { EventEmitter } = require("events");

const myEvent = new EventEmitter();

myEvent.on('greeting', function(str1, str2){
    console.log(str1, str2);
    console.log(this);
    console.log(this === myEvent);
});

myEvent.on('greet', (str) => {

    setImmediate(() => {
        console.log(">>> Hello", str);
    })
});

myEvent.emit('greet', 'Sam');

myEvent.emit('greeting', 'Jack', 'John');