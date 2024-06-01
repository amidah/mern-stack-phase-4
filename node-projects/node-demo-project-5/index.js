const fs = require("fs");

setTimeout(() => {
    console.log(">>> Callback in Timeout");
}, 0)


setImmediate(() => {
    console.log(">>> Callback in Immediate \n");
})


fs.readFile("./essay.md", (err, data) => {
    if(err){
        console.log(err.stack);
        return;
    }
    console.log(data + "\n");
})

setTimeout(() => {
    console.log(">>> Callback in Timeout in Readfile");
}, 0)


setImmediate(() => {
    console.log(">>> Callback in Immediate in Readfile");
})