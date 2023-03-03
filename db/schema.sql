-- Removing & creating a new database to start with a clean slate.
DROP DATABASE IF EXISTS companyrecords_db;
CREATE DATABASE companyrecords_db;

-- Selecting the database to write data too. 
USE companyrecords_db;

-- Verifying the database we are in. 
SELECT DATABASE();

-- Creating the departments table. 
CREATE TABLE department (
    id INT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

-- Creating the roles table. 
CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_name VARCHAR(30) NOT NULL -- link to department table department_name
);

-- Creating the employees table. 
CREATE TABLE employee (
    id INT PRIMARY KEY, -- link to role table id
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    title, -- link to role table title. 
    department_name VARCHAR(30) NOT NULL, -- link to department table department_name
    salary DECIMAL NOT NULL, -- link to role table salary
    manager_id INT NOT NULL -- do i need to link this to person? 
);