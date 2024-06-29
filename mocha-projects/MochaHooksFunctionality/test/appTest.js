const assert = require("assert");

const appRef = require("../src/app");

describe("Mocha Hook Example", ()=>{
    before(()=>{
        console.log("this function call before all it - only once");
    })

    beforeEach(()=>{
        console.log("this function call before each it - again and again");
    })

    it("first test function", () => {
        appRef.firstFunction();
    })

    it("second test function", () => {
        appRef.secondFunction();
    })

    afterEach(()=>{
        console.log("this function call after each it - again and again");
    })

    after(()=>{
        console.log("this function call after all it - only once");
    })
})