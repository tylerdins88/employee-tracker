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

const newRole = [
    {
        name: "name",
        message: "What is the name of the new role?",
        type: "input"
    },
    {
        name: "salary",
        message: "What is the salary of the new role?",
        type: "input"
    },
    {
        name: "depart",
        message: "What department does the role belong to?",
        choice: [],
        type: "list"
    }
];

function addRole() {

}

module.exports = addRole;

// add role: write data
// -- prompt series of questions:
// -- What is the name of the role?
// -- What is the salary of the role?
// -- Which department does the role belong to? (list of choices is departments. needs to update if departments update)
// -- then write answers to role table with id. (id to be used as a primary key?)
// - console log role added to database
// - back to main menu