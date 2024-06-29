const assert = require("assert");
const  appRef = require("../src/Operation");


describe("Function Testing ", () => {

    it("Synchronous Add Testing ", () => {
        let actualResult = appRef.addSynchronousOperation(100,200);
        assert.equal(actualResult, 300);
    })

    it("Asynchronous Sub Testing ", (done) => {
        appRef.subAsynchronousOperation(200,100, (actualResult) => {
            assert.equal(actualResult, 100);
            done();
        })
    })

    
})
