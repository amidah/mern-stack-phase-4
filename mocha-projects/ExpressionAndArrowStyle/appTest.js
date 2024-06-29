const assert = require("assert");
const appRef = require("./app");

// expression style
describe("Simple Testing using expression style", function(){
    it("sayHello testing using expression style", function(){
        let actualResult = appRef.sayHello("John");
        assert.equal(actualResult, "Welcome to node js mocha John");
    })
})

// arrow style
describe("Simple Testing using arrow style", () => {
    it("sayHello testing using arrow style", () => {
        let actualResult = appRef.sayHello("John");
        assert.equal(actualResult, "Welcome to node js mocha John");
    })
})