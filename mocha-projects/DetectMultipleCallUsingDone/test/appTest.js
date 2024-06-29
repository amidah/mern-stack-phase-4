const assert = require("assert");

const appRef = require("../src/app");

describe("Testing Fake Rest API", () => {
    
    it("Check Fake Rest API number of products ", async() => {
        
        const actualResult = await appRef.loadProductFakeData();
        
        assert.equal(actualResult.products.length, 30);
    })

    it("Check Fake Rest API any product details using index position ", async() => {

        const actualResult = await appRef.loadProductFakeData();

        assert.equal(actualResult.products[0].title, "Essence Mascara Lash Princess");
    })
})