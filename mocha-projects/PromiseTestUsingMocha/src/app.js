const products = require("./api");

function findProduct(productId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const filterProduct = products.find(p => p.pid = productId);
            filterProduct ? resolve({message: "Product Found", result: filterProduct}) : reject(new Error("Product Not Found"))
        }, 1000)
    })
}

module.exports = {findProduct}