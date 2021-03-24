const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { exit } = require('process');

var employeeArr = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the employee's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the employee');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's ID",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the ID of the employee');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address of the employee');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the manager's office number?",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter the office number of the manager');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'Would you like to add another employee, or finish building your team?',
            choices: ['Engineer', 'Intern', 'Finish building my team']
        },
    ]).then(managerData => {
        const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.office);
        employeeArr.push(manager);
        console.log(employeeArr);

        if(managerData.role === 'Engineer') {
            return promptEngineer();
        } else if (managerData.role === 'Intern') {
            return promptIntern();
        } else {
            return managerData;
        }
    });
};

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the employee's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the employee');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's ID",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the ID of the employee');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address of the employee');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github username?",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's github username");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'Would you like to add another employee, or finish building your team?',
            choices: ['Engineer', 'Intern', 'Finish building my team']
        },
    ]).then(engineerData => {
        const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
        employeeArr.push(engineer);
        console.log(employeeArr);

        if(engineerData.role === 'Engineer') {
            return promptEngineer();
        } else if (engineerData.role === 'Intern') {
            return promptIntern();
        } else {
            return engineerData;
        }
    });
};

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the employee's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the employee');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's ID",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the ID of the employee');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address of the employee');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does the intern attend?",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school name");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'Would you like to add another employee, or finish building your team?',
            choices: ['Engineer', 'Intern', 'Finish building my team']
        },
    ]).then(internData => {
        const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
        employeeArr.push(intern);
        console.log(employeeArr);

        if(internData.role === 'Engineer') {
            return promptEngineer();
        } else if (internData.role === 'Intern') {
            return promptIntern();
        } else {
            return internData;
        }
    });
};

const createHTML = () => {
    console.log("Great job Connor!");
};


promptManager()
    .then(createHTML);