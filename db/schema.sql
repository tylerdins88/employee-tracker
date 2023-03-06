-- Removing & creating a new database to start with a clean slate.
DROP DATABASE IF EXISTS companyrecords_db;
CREATE DATABASE companyrecords_db;

-- Selecting the database to write data too. 
USE companyrecords_db;

-- Verifying the database we are in. 
SELECT DATABASE();

-- Creating the departments table. 
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

-- Creating the roles table. 
CREATE TABLE department_role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL, -- link to department table department_name
    FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Creating the employees table. 
CREATE TABLE department_employee (
    id INT AUTO_INCREMENT PRIMARY KEY, -- link to role table id
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    -- title VARCHAR(30) NOT NULL, -- link to role table title. 
    role_id INT NOT NULL, -- link to department table department_name
    FOREIGN KEY (role_id) REFERENCES department_role(id),
    manager_id INT, -- do i need to link this to person? 
    FOREIGN KEY (manager_id) REFERENCES department_employee(id)
);