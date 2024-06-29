//let chai = require('chai').assert;

import * as chai from 'chai';
let assert = chai.assert;

let name = "John";
let num = 100;
let result = true;
let array_num = [10, 20, 30, 40, 50, 60]

function chaiAssertion(){

}

assert.isTrue(result);
assert.isArray(array_num);
assert.typeOf(name, "string");
assert.typeOf(num, "number");
assert.isFunction(chaiAssertion);
assert.equal(name, "John");
assert.lengthOf(name, "4");
assert.include(array_num, 10);

