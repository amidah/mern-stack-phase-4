const assert = require("assert").strict;

let a = 10; 
let b = 10;

let num = [10, 20, 30, 40];

let msg = null;

try{
    assert.equal(a, b);
    assert.deepStrictEqual(num, [10, 20, 30, 40]);
    assert.match("We  are learning mocha using node js projects", /mocha/);
    assert.ok(true, "This is true value");
}
catch(error){
    console.log(error);
}
