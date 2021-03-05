const fs = require('fs');
const inquirer = require('inquirer');

const promptUser = () => {
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
            name: 'email',
            message: "Enter the employee's email",
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
            type: 'confirm',
            name: 'add',
            message: 'Add another employee to the roster?',
            default: false 
        }
    ])
}