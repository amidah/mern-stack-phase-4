const mysql = require("mysql");

// Create DB Connection
const dbConnection = mysql.createConnection({
    host: "localhost",
    user: "mysql_user",
    password: 'Admin@1234',
    database: "students"
});

// Connect to Database
dbConnection.connect((err) => {
    if(err){
        throw err;
    }
    console.log("MySql Connected");

    // sql query to create a student table in the students database
    let createStdTable = `CREATE TABLE IF NOT EXISTS student(
        id int primary key auto_increment,
        name varchar(255) not null,
        email varchar(255) not null,
        phone varchar(255),
        address varchar(255)
    )`;

    // sql query to insert data in student table in the students database
    let insertStdTable = `INSERT INTO student(name, email, phone, address) values('John', 'john@gmail.com', '+123456789', '123 Wolf Street')`;

    // sql query to get data from student table from the students database
    let selectStdTable = `select * from student`;

    // sql query to modify the data in the student table in the students database
    let updateStdTable = `update student set name='John Smith', email='john.smith@gmail.com' where id=1`;

    // sql query to delete data from student table from the students database
    let deleteStdTable = `delete from student where id=1`;

    dbConnection.query(deleteStdTable, (error, result) => {
        if(error){
            throw error;
        }
        console.log(">>> Result", result);
    })
});
