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

function addEmployee() {

};

// add employee: write data
// -- prompt series of questions:
// -- What is the employees first name?
// -- What is the employees last name?
// -- What is the employees role? (list of choices is roles. need to update if roles is updated)
// -- Who is the employee's manager? (list of choices from empolyee table. need to update empolyees as they change. make the key linkable)    // -- then write answers to employee table
// - console log that employee was added to database
// - back to main menu