function addSynchronousOperation(x, y){
    return x+y;
}

function subAsynchronousOperation(x, y, callback){
    callback(x-y);
}

module.exports={addSynchronousOperation, subAsynchronousOperation};