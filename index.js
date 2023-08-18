// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const { writeFile } = require('fs').promises;

const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your application?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is your description?',
        },
        {
            type: 'input',
            name: 'install',
            message: 'What is the installation process?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the steps for usage?',
        },
        {
            type: 'input',
            name: 'contributor',
            message: 'List all contributors to this application?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What commands are needed to test the application?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'List the licensing for your application?',
            choices: ['Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'GNU GPLv2.0', 'Eclipse Public License 2.0', 'Mozilla Public License 2.0', 'The Unlicense', 'none',]
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
    ]);
};

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    generateMarkdown()
}


// TODO: Create a function to initialize app
function init() {
    questions().then((answers) => {
        writeFile('README.md', generateMarkdown({ ...answers }))
    })
        .then(() => console.log('Successfully created README'))
        .catch((err) => console.error(err));
}


// Function call to initialize app
init();
