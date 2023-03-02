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
)

-- Creating the roles table. 
CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    -- need to connect next line to create table department id
    department_id INT 
)

-- Creating the employees table. 
CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL
)