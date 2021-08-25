// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// // TODO: Create an array of questions for user input
// description, 
// installation instructions, 
// usage information, 
// contribution guidelines, 
// test instructions
// git hub username -make this a hype link to git hub page
// email
// Table of contents takes to the corresponding section

const questions = [
        {
            type: `input`,                                                              
            message: `What is your full name?`,
            name: `name`
        },
        {
            type: `input`,                                                              
            message: `What languages did you use?`,
            name: `languages`
        },
        {
            type: ``,                                                              
            message: ``,
            name: ``
        },
        {
            type: ``,                                                              
            message: ``,
            name: ``
        }
    ];

// TODO: Create a function to write README file
inquirer
    .prompt(questions)



    .then((response) => {
            //console.log(response.name, response.languages, response.comm)
        fs.writeFile(`ReadMETemplate.JSON`, JSON.stringify(response, null),(err)=>
        err ? console.log(err) : console.log(`success!`)
        )
    });

JSON.parseInt();

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
