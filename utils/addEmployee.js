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

const newEmployee = [
    {
        name: "firstname",
        message: "What is the new employees first name?",
        type: "input"
    },
    {
        name: "lastname",
        message: "What is the new employees last name?",
        type: "input"
    },
    {
        name: "role",
        message: "What will be the new employees role?",
        choice: [],
        type: "choice"
    },
    {
        name: "manager",
        message: "Who will be the new employees manager?",
        choice: [],
        type: "choice"
    }
]
function addEmployee() {
    inquirer
        .prompt(newEmployee)
        .then(input => {
            const trackEmployees = require("../server");
            db.query(``,
                function (err, res) {
                    console.log(`"${input.firstname}" "${input.lastname}" has been added as a new employee.`)
                    trackEmployees();
                })
        })
};

module.exports = addEmployee;

// add employee: write data
// -- prompt series of questions:
// -- What is the employees first name?
// -- What is the employees last name?
// -- What is the employees role? (list of choices is roles. need to update if roles is updated)
// -- Who is the employee's manager? (list of choices from empolyee table. need to update empolyees as they change. make the key linkable)    // -- then write answers to employee table
// - console log that employee was added to database
// - back to main menu