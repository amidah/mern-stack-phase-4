// simple function creation
function greetUser(username){
    console.log(">>> Hello", username, '\b, How are you?');
}

// store function reference in a variable
const greetUser1 = function(username){
    console.log(">>> Hello", username, '\b, How are you?');
}

// declare first class function using arrow operator
const greetUser2 = (username) => {
    console.log(">>> Hello", username, '\b, How are you?');
}

greetUser('John');
greetUser1('Sam');
greetUser2('Max');