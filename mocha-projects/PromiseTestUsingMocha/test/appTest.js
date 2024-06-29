const assert = require("assert");
const appRef = require("../src/app")

describe("Promise Fake Test API", ()  => {

    it("Product Found Test", async () => {
        const actualResult = await appRef.findProduct(1);

        const expectedResult = {
            "message": "Product Found",
            "result": {
                pid: 1,
                pname: "TV",
                price: 70000
            }
        }

        assert.deepEqual(actualResult, expectedResult);
    })

    it("Product Not Found Test", async() => {
        try{
            const actualResult = await appRef.findProduct(5);
        }
        catch(error){
            assert.equal(error.message, "Product Not Found");
        }
    })

})