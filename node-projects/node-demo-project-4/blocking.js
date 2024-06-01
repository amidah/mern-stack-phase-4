const fs = require("fs");

// Reading Text from file synchronously - so it is a blocking operation which is blocking next operation to print table of 5
const data = fs.readFileSync("./essay.md");
console.log(data + "\n");

// Printing table of 5
for(let num = 1; num <= 10; num++){
    console.log(`5 * ${num} = ${num * 5}`);
}