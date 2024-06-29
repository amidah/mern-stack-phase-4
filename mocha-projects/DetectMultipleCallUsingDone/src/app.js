const fetch = require("node-fetch-commonjs");

async function loadProductFakeData(){
    
    let response = await fetch("https://dummyjson.com/products");
    
    let result = await  response.json();

    // console.log(result.products.length);

    return  result;
}

// loadProductFakeData();

module.exports = {loadProductFakeData}