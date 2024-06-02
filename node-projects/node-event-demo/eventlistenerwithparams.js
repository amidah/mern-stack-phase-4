const { EventEmitter } =  require("events");

const myEvent = new EventEmitter();

myEvent.on('greeting', function(str1, str2){
    console.log(str1, str2);
    console.log(this);
    console.log(this === myEvent);
});

myEvent.emit('greeting', 'John', 'Jack');