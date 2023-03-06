-- Data to add to department table. 
INSERT INTO department (department_name)
VALUES  ("Engineering"),
        ("Finance"),
        ("Legal"),
        ("Sales")
;
-- Data to add to role table. 
INSERT INTO role (title, salary, department_id)
VALUES  ("Lead Engineer", 150000, 1),
        ("Software Engineer", 120000, 1),
        ("Account Manager", 160000, 2),
        ("Accountant", 125000, 2),
        ("Legal Team Lead", 250000, 3),
        ("Lawyer", 190000, 3),
        ("Sales Lead", 100000, 4),
        ("Salesperson", 80000, 4)
;
-- Data to add to employee table. 
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("John", "Doe", 1, null),
        ("Mike", "Chan", 2, 1),
        ("Ashley", "Rodriguez", 3, null),
        ("Kevin", "Tupik", 4, 3),
        ("Kunal", "Singh", 5, null),
        ("Malia", "Brown", 6, 5),
        ("Sarah", "Lourd", 7, null),
        ("Tom", "Allen", 8, 7)
;