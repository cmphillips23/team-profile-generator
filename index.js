const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-page.js');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const { exit } = require('process');

let employeeArr = [];

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
    ]).then(employeeData => {
        const manager = new Manager(employeeData.name, employeeData.id, employeeData.email, employeeData.office);
        employeeArr.push(manager);
        console.log(employeeArr);

        if(employeeData.role === 'Engineer') {
            return promptEngineer();
        } else if (employeeData.role === 'Intern') {
            return promptIntern();
        } else {
            return employeeData;
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
    ]).then(employeeData => {
        const engineer = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github);
        employeeArr.push(engineer);
        console.log(employeeArr);

        if(employeeData.role === 'Engineer') {
            return promptEngineer();
        } else if (employeeData.role === 'Intern') {
            return promptIntern();
        } else {
            return employeeData;
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
    ]).then(employeeData => {
        const intern = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school);
        employeeArr.push(intern);
        console.log(employeeArr);

        if(employeeData.role === 'Engineer') {
            return promptEngineer();
        } else if (employeeData.role === 'Intern') {
            return promptIntern();
        } else {
            return employeeData;
        }
    });
};

const generateCards = employeeArr => {
   for (i=0; i = employeeArr.length; i++) {
    let role = employeeArr[i].getRole();

       if(role === 'Manager') {
           return `
               <div class="card">
                   <div class="card-body bg-info text-white ">
                       <h3 class="card-title">${employeeArr[i].name}</h3>
                       <h5>Manager</h5>
                   </div>
                   <div class="d-flex-inline p-3 card-text">
                       <p>ID: ${employeeArr[i].id}</p>
                       <a href = "mailto: ${employeeArr[i].email}">${employeeArr[i].email}</a>
                       <p>Office number: ${employeeArr[i].office}</p>
                   </div>
               </div>
           `
       } else if (role === 'Engineer') {
           return `
               <div class="card">
                   <div class="card-body bg-info text-white ">
                       <h3 class="card-title">${employeeArr[i].name}</h3>
                       <h5>Engineer</h5>
                   </div>
                   <div class="d-flex-inline p-3 card-text">
                       <p>ID: ${employeeArr[i].id}</p>
                       <a href = "mailto: ${employeeArr[i].email}">${employeeArr[i].email}</a>
                       <a href = "https://github.com/${employeeArr[i].github}">GitHub Profile</a>
                   </div>
               </div>
           `
       } else {
           return `
               <div class="card">
                   <div class="card-body bg-info text-white ">
                       <h3 class="card-title">${employeeArr[i].name}</h3>
                       <h5>Intern</h5>
                   </div>
                   <div class="d-flex-inline p-3 card-text">
                       <p>ID: ${employeeArr[i].id}</p>
                       <a href = "mailto: ${employeeArr[i].email}">${employeeArr[i].email}</a>
                       <p>School: ${employeeArr[i].school}</p>
                   </div>
               </div>
           `
       }
       
   }
};

const generatePage = employeeArr => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <link rel="stylesheet" href="./src/style.css">
    </head>
    <body>
        <header>
            <h1 class="p-5 bg-secondary text-center align-middle text-white">My Team</h1>
        </header>
        <div class="d-flex justify-content-around">
            <div class="card-deck justify-content-around col-11 text-center">
                ${generateCards(employeeArr)}
            </div>
        </div>
    </body>
    </html>
    `;
};


promptManager()
    .then(employeeData => {
        return generatePage(employeeData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });