const obj = {
    "name": "Fionna",
    "age": 34,
    "email": "fionna@gmail.com",
    "phone": "91-9090909090",
    "website": "https://example.com",
    "active": false,
    "hobbies": ["Playing", "Cooking"],
    "address":{
        "street":"ABC",
        "city": "Ludhiana",
        "state": "punjab",
        "country": "india"
    }

};

console.log(">>> Object before update: ");
console.log(obj);

console.log(">>> Getting Property name value: ", obj['name']);

// Adding new property i.e. dob in main object
obj['dob'] = "12-09-1990";

// Adding new property i.e. zipcode in child address object
obj['address']['zipcode'] = "123456";

// Update name and email in main object
obj['name'] = "John"
obj['email'] = "john@gmail.com"

console.log(">>> Object after update: ");
console.log(obj);






