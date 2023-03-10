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
    console.log(`roleUpdate connected to the companyrecords_db`)
);

const roleChange = [
    {
        name: "employee",
        message: "Which employee's role would you like to update?",
        choices: [],
        type: "list"
    }
    {
        name: "role",
        message: "Which role do you want to assign to the selected employee?",
        choices: [],
        type: "list"
    }
]

function roleUpdate() {
    db.query(`SELECT CONCAT(first_name, " ", last_name) AS employees FROM employee`, (err, results) => {
        if (err) throw err;
        let employeeArray = []
        for (i = 0; i < results.length; i++) {
            employeeArray.push(results[i].employees)
        } roleChange[0].choices = employeeArray;
    })

    db.query(`SELECT title AS role FROM role`, (err, results) => {
        if (err) throw err;
        let roleArrary = []
        for (i = 0; i < results.length; i++) {
            roleArrary.push(results[i].role)
        } roleChange[1].choices = roleArrary;
    })

    inquirer
        .prompt(roleChange)
        .then(input => {
            const trackEmployees = require("../server");


        })
};

module.exports = roleUpdate;

// update employee role: update data
// -- prompt series of questions:
// -- Which employee's role would you like to update? (list of employees from employee table)
// -- Which role do you want to assign to the selected employee? (list of choices from roles table)
// -- then write answer to employee table updating role. 
// - console log that the employees role has been updated. 
// - back to menu 