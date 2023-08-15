# backend-readme-generator

![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)

## Description
Backend-readme-generator is a command-line tool to create a high quality readme file based on the NPM package [inquirer](https://www.npmjs.com/package/inquirer). It's goal is to reduce the amount of time one needs to create a readme file scratch. It allowed me to look a bit deeper into the inquirer package as it is a usefool tool in prompting questions to a user via command-line. Overall, the project works as intended but can definitely be expanded upon feature wise. Listing the specific license version is the next step to improving the distinction upon licenses that have multiple versions. As it currently is, the readme generator provides a link to [opensource](https://opensource.org/licenses/) that has a list of the more common licenses but not the user's specific one.

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
Clone the contents of this repository to your location of choice. We must also insure that the NPM package inquirer is also installed in our repository. Install inquirer itself by typing 'npm install inquirer@8.2.4'. This will install a specific version of inquirer instead of the latest one. The repository already contains a package.json file so we can skip initializing npm.

<iframe src="https://drive.google.com/file/d/1649zj1VWNTevNWJtlWhtqGjWbNZL91i4/preview" width="640" height="480"></iframe>

## Usage
Open the repository within your preferred terminal window and type: 'node index.js'. A series of prompts will begin which will ask you to input information for each readme section. If you so choose to include a license for your readme, it will be displayed at the top of the page using a badge from [shields.io](https://shields.io/). The license prompt will include some of the more common licenses but by no mean is it fully extensive. You can simply edit the newly created readme file in your choice of editor afterwards.

<iframe src="https://drive.google.com/file/d/189wLWsFsszVN9ccTjuUBq3kXlxd3R890/preview" width="640" height="480"></iframe>

## Credits
- The inquirer documentation [here](https://www.npmjs.com/package/inquirer)
- The shields.io documentation [here](https://shields.io/)
- Class notes on Node.js and NPM packages

## License
This project is licensed under the [MIT](https://opensource.org/licenses) license.

## Questions
If you have any questions regarding this project, please contact me at REDACTED or visit my GitHub page at [GitHub Profile](https://github.com/Exo-MDR-CD2000).