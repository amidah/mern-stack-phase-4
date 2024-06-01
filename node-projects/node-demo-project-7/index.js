// Pass by reference

let student1 = {
    "name": "John",
    "email": "john@gmail.com",
    "phone": "91-9898989898"
};

let student2 = student1;

console.log(">>> Before Update: ");

console.log(">>> Std1: ", student1);
console.log(">>> Std2: ", student2);

student2.email = "john.wick@gmail.com";
student2['hobbies'] = ["Cooking", "Singing"];

console.log(">>> After Update: ");

console.log(">>> Std1: ", student1);
console.log(">>> Std2: ", student2);

// Pass By Value

let firstNumber = 100;
let firstNumberCopy = firstNumber;

console.log("Before");
console.log(firstNumber);
console.log(firstNumberCopy + "\n");

firstNumber = firstNumberCopy / 2;

firstNumberCopy = firstNumber * 3;

console.log("After");
console.log(firstNumber);
console.log(firstNumberCopy + "\n");