// Require mysql to use it as a database, inquirer so a user can interact with that database.
const mysql = require("mysql2");
const inquirer = require("inquirer");

// Connect to database
const db = mysql.createConnection(
    {
        host: "127.0.0.1",
        // MySQL username,
        user: "root",
        // MySQL Password, if using
        password: "",
        database: "companyrecords_db"
    },
    console.log(`Connected to the companyrecords_db`)
);

function roleUpdate() {

};

module.exports = roleUpdate;

// update employee role: update data
// -- prompt series of questions:
// -- Which employee's role would you like to update? (list of employees from employee table)
// -- Which role do you want to assign to the selected employee? (list of choices from roles table)
// -- then write answer to employee table updating role. 
// - console log that the employees role has been updated. 
// - back to menu 