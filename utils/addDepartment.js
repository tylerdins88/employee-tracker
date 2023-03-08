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

const newDepartment = [
    {
        name: "name",
        message: "What is the name of the new department?",
        type: "input"
    }
];

function addDepartment() {
    inquirer
        .prompt(newDepartment)
        .then(input => {
            const trackEmployees = require("../server");
            db.query(`INSERT INTO department (name) VALUES ("${input.name}")`, function (err, res) {
                console.log(`"${input.name}" has been added as a new department.`)
                trackEmployees();
            })
        })
};

module.exports = addDepartment;

// add department: write data
// -- prompt question, (What is the name of the department?)
// -- then writing answer to department table with a id
// - console log department that was added to database. 
// - back to main menu