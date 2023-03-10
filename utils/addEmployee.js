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
    console.log(`addEmployee connected to the companyrecords_db`)
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
        name: "title",
        message: "What will be the new employees role?",
        choices: [],
        type: "list"
    },
    {
        name: "manager",
        message: "Who will be the new employees manager?",
        choices: [],
        type: "list"
    }
];

function addEmployee() {
    db.query(`SELECT title FROM role`, (err, results) => {
        if (err) throw err;
        let roleArray = []
        for (i = 0; i < results.length; i++) {
            roleArray.push(results[i].title)
        } newEmployee[2].choices = roleArray;
    })

    db.query(`SELECT CONCAT(first_name, " ", last_name) AS managers FROM employee WHERE manager_id IS NULL`, (err, results) => {
        if (err) throw err;
        let managerArray = []
        for (i = 0; i < results.length; i++) {
            managerArray.push(results[i].managers)
        } newEmployee[3].choices = managerArray;
    })

    inquirer
        .prompt(newEmployee)
        .then(input => {
            const trackEmployees = require("../server");

            db.query(`SELECT * FROM role WHERE title="${input.title}"`, function (err, res) {
                let role = res[0].id

                db.query(`SELECT * FROM employee WHERE CONCAT(first_name, " ", last_name)="${input.manager}"`, function (err, res) {
                    let manager = res[0].id

                    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
                    ("${input.firstname}", "${input.lastname}", "${role}", "${manager}")`, function (err, res) {
                        console.log(`"${input.firstname}" has been added as a new employee.`)
                        trackEmployees();
                    })
                })
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