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
    },
    {
        name: "role",
        message: "Which role do you want to assign to the selected employee?",
        choices: [],
        type: "list"
    }
]

function roleUpdate() {
    db.query(`SELECT CONCAT(first_name, " ", last_name) AS fullname FROM employee`, (err, results) => {
        if (err) throw err;
        let employeeArray = []
        for (i = 0; i < results.length; i++) {
            employeeArray.push(results[i].fullname)
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
            let nameSplit = input.employee;
            let split = nameSplit.split(" ");
            let name = split[0];

            db.query(`SELECT * FROM role WHERE title="${input.role}"`, function (err, res) {
                let role = res[0].id

                db.query(`UPDATE employee SET role_id="${role}" WHERE first_name="${name}"`, function (err, res) {
                    let employeeName = res[0].id;

                    db.query(`SELECT * FROM employee WHERE CONCAT(first_name, " ", last_name)="${input.employee}"`, function (err, res) {
                        console.log(`"${employeeName}" role has been updated!`)
                        trackEmployees();
                    })
                })
            })
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