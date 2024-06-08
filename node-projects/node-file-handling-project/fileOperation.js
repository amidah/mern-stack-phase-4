const { readFile, writeFile, unlink } = require("fs");
const { readFileSync, writeFileSync, unlinkSync } = require("fs");

// non-blocking-task to read file

readFile("./syncContent.txt", (error, data) => {
    if(error){
        console.error(error);
        return;
    }
    console.log(">>> Asynchronous File content\n\b", data.toString());
});

// blocking task to read file
async function readFileContent(){
    const data = await readFileSync("./syncContent.txt");
    console.log(">>> Synchronous File content\n\b", data.toString());
}

readFileContent();

// non-blocking write to file

const content = "MYSQL is a Relational Database Management System.";
writeFile("asyncFileContent.txt", content, { encoding: 'utf-8' }, (error) => {
    if(error){
        console.error(error);
        return;
    }
    console.log(">>> Asynchronous File Writing Operation is Successfull.")
});

// blocking write to file

async function writeContentInFile(){
    try{
        const fileContent = "MongoDB is a Non Relational Database Maanagement System.";
        const data = await writeFileSync("syncFileContent.txt", fileContent);

        console.log(">>> Synchronous File Writing Operation is Successfull.");
    }
    catch(error){
        console.error(error);
    }
}

writeContentInFile();

// Non-Blocking File Deletion Task
unlink("./asyncFileContent.txt", (error) => {
    if(error){
        console.error(error);
        return;
    }
    console.log(">>> Asynchronous File Deletion Operation is Successfull.")
})

// Blocking File Deletion Task
async function deleteFile(){
    try{
        await unlinkSync("syncFileContent.txt");
        console.log(">>> Synchronous File Deletion Operation is Successfull.")
    }
    catch(error){
        console.error(error);
    }
}

deleteFile();