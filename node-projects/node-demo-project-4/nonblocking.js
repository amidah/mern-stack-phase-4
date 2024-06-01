const fs = require("fs");

// Reading Text From File asynchronously - non blocking for any other operation

fs.readFile("./essay.md", (error, data) => {
    if(error){
         throw error;
    }
    console.log(data + "\n");
})

// Work 1: Printing after delay
setTimeout(() => {
    console.log("Hello");
}, 1000)

// Work 2: Printing table of 5
for(let num = 1; num <= 10; num++){
    console.log(`5 * ${num} = ${num * 5}`);
}