// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Please provide a description of your project.",
    },
    {
        type: 'input',
        name: 'installation',
        message: "Please provide installation instructions for your project.",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please provide usage information for your project.",
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Please provide contribution guidelines for your project.",
    },
    {
        type: 'input',
        name: 'test',
        message: "Please provide test instructions for your project.",
    },
    {
        type: 'list',
        name: 'license',
        message: "Please select a license for your project.",
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: "Please provide your GitHub username.",
    },
    {
        type: 'input',
        name: 'email',
        message: "Please provide your email address.",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        //add license badge here
        const licenseBadge = `![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)`;
        const readme = `# ${answers.title}

${licenseBadge}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## Test
${answers.test}

## License
This project is licensed under the ${answers.license} license.

## Questions
If you have any questions regarding this project, please contact me at ${answers.email} or visit my GitHub page at [GitHub Profile](https://github.com/${answers.github}).`;

        writeToFile('README.md', readme);
    });
}

// Function call to initialize app
init();