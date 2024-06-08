// create cluster api for multi-core servers

// let us create a cluster api without the child process
function longComputation(){
    let multiplication = 1;
    for(let num = 1; num <= 1e10; num++){
        multiplication *= num;
        // multiplication = multiplication * num
    }

    return multiplication;
}

console.log(new Date().toTimeString());

console.log(">>> ", longComputation());

console.log(new Date().toTimeString());