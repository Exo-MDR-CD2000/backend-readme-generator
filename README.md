# backend-readme-generator

![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)

## Description
Backend-readme-generator is a command-line tool to create a high quality readme file based on the NPM package [inquirer](https://www.npmjs.com/package/inquirer). It's goal is to reduce the amount of time one needs to create a readme file scratch. It allowed me to look a bit deeper into the inquirer package as it is a usefool tool in prompting questions to a user via command-line. Overall, the project works as intended but can definitely be expanded upon feature wise.

## Table of Contents
- [backend-readme-generator](#backend-readme-generator)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)

## Installation
Clone the contents of this repository to your location of choice. We must also insure that the NPM package inquirer is also installed in our repository. Open a new terminal window within our newly cloned repository and type 'npm init -y'. This will initialize a new npm package with some default answers. Then, we must install inquirer itself by typing 'npm install inquirer@8.2.4'. This will install a specific version of inquirer instead of the latest one.

<!-- insert video demo here -->

## Usage
Open the repository within your preferred terminal window and type: 'node index.js'. A series of prompts will begin which will ask you to input information for each readme section. If you so choose to include a license for your readme, it will be displayed at the top of the page using a badge from [shields.io](https://shields.io/). The license prompt will include some of the more common licenses but by no mean is it fully extensive. You can simply edit the newly created readme file in your choice of editor afterwards.

<!-- insert video demo here -->

## Credits
- The inquirer documentation [here](https://www.npmjs.com/package/inquirer)
- The shields.io documentation [here](https://shields.io/)
- Class notes on Node.js and NPM packages

## License
This project is licensed under the MIT license.

## Questions
If you have any questions regarding this project, please contact me at REDACTED or visit my GitHub page at [GitHub Profile](https://github.com/Exo-MDR-CD2000).