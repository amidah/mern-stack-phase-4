const operationRef = require("./Operation");
const assert = require("assert");

// lets create our test scenario to test addNumber function
describe("Operation Testing ", () => {

    it("Addition Testing ", () => {
        let result = operationRef.addNumber(10, 20);
        assert.equal(result, 20);
    })

})