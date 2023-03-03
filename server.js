// Node package library dependencies. 
const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");

// 
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware. 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

const mainMenu = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "mainMenu",
        choices: ["View All Employees", "Add Employee", "Update Employee Role", "View ALl Roles",
            "Add Role", "View ALl Departments", "Add Department", "Quit"]
    }
]

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// I need each choice to do something
// View all employees: show table
// -- shows me a table with id, first_name, last_name, title, department, salary, manager or null
// add employee: write data
// -- prompt series of questions:
// -- What is the employees first name?
// -- What is the employees last name?
// -- What is the employees role? (list of choices is roles. need to update if roles is updated)
// -- Who is the employee's manager? (list of choices from empolyee table. need to update empolyees as they change. make the key linkable)
// -- then write answers to employee table
// - console log that employee was added to database
// - back to main menu
// update employee role: update data
// -- prompt series of questions:
// -- Which employee's role would you like to update? (list of employees from employee table)
// -- Which role do you want to assign to the selected employee? (list of choices from roles table)
// -- then write answer to employee table updating role. 
// - console log that the employees role has been updated. 
// - back to menu 
// view all roles: show table
// -- shows me a table with id, title of role, depart role is under, salary
// add role: write data
// -- prompt series of questions:
// -- What is the name of the role?
// -- What is the salary of the role?
// -- Which department does the role belong to? (list of choices is departments. needs to update if departments update)
// -- then write answers to role table with id. (id to be used as a primary key?)
// - console log role added to database
// - back to main menu
// view all departments: show table
// -- shows me a table with id & department name. 
// add department: write data
// -- prompt question, (What is the name of the department?)
// -- then writing answer to department table with a id
// - console log department that was added to database. 
// - back to main menu
// quit: exit application