// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// // TODO: Create an array of questions for user input
// description, check  
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
            message: `type out a description of your project`,
            name: `desc`
        },
        {
            type: `list`,                                                              
            message: `pick your languages`,
            name: `languages`,
            choices: ["HTML", "CSS", "Java Script", "JQuery"]
        },
        {
            type: `input`,                                                              
            message: `What usage does this project have?`,
            name: `usage`
        },

        {
            type: `input`,                                                              
            message: `What contribution guidelines`,
            name: `contr`
        },
        {
            type: `input`,                                                              
            message: `How do you test this`,
            name: `test`
        },
        {
            type: `input`,                                                              
            message: `GitHub Username`,
            name: `gitHubUser`
        },
        {
            type: `input`,                                                              
            message: `Email Address`,
            name: `email`
        },
        {
            type: `input`,                                                              
            message: `LinkedIn :`,
            name: `linkedIn`
        },
        {
            type: `input`,                                                              
            message: `Git clone :`,
            name: `gitClone`
        },
        {
            type: `list`,                                                              
            message: `Pick your License`,
            name: `license`,
            choices: ["MIT", "Apache", "Mozilla", "GPL"]

        },
    ];

// TODO: Create a function to write README file

//JSON.parseInt();

const generateMD = (answers) => `# Jeffrey-McLeod-Portfolio-

![badge](https://img.shields.io/badge/license-${answers.license}-blue.svg)
[![LinkedIn][linkedIn-shield](${answers.linkedIn})

<!-- TABLE OF CONTENTS -->

## Table of Contents
* [About The Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Contact](#contact)

<!-- ABOUT THE PROJECT -->
## About The Project
${answers.desc}

${answers.gitHubUser}, ${answers.email}

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
   sh
   git clone https://github.com/JeffM33/Jeffrey-McLeod-Portfolio-.git
   



<!-- USAGE EXAMPLES -->
## Usage

<!-- ROADMAP -->
## Roadmap

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature)
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request


<!-- CONTACT -->
## Contact

Feel free to reach out to me with questions comments, or concerns at one of the ways below.

Git Hub: ${answers.gitHubUser}

Email: ${answers.email}

LinkedIn Link: ${answers.linkedIn}

Project Link: [https://github.com/JeffM33/Jeffrey-McLeod-Portfolio-](https://github.com/JeffM33/Jeffrey-McLeod-Portfolio-)









<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
${answers.contr}`

// TODO: Create a function to initialize app
function init() 
    {inquirer
        .prompt(questions)
            //console.log(response.name, response.languages, response.comm)
            .then((answers) => writeFileAsync('readMETemp.MD', generateMD({...answers})))
            .then(() => console.log('Successfully wrote to index.html'))
            .catch((err) => console.error(err));
    }

// Function call to initialize app
init();
