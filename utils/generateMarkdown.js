// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  switch (license) {
    case "MIT":
      badge = "https://img.shields.io/badge/License-MIT-yellow.svg";
      break;
    case "APACHE 2.0":
      badge = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
      break;
    case "GPL 3.0":
      badge = "https://img.shields.io/badge/License-GPLv3-blue.svg";
      break;
    case "BSD 3":
      badge = "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";
      break;
    case "None":
      badge = "";
      break;
    default:
      badge = "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  switch (license) {
    case "MIT":
      link = "https://opensource.org/licenses/MIT";
      break;
    case "APACHE 2.0":
      link = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "GPL 3.0":
      link = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "BSD 3":
      link = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "None":
      link = "";
      break;
    default:
      link = "";
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = "";
  switch (license) {
    case "MIT":
      section = "Licensed under the [MIT License](https://opensource.org/licenses/MIT).";
      break;
    case "APACHE 2.0":
      section = "Licensed under the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0).";
      break;
    case "GPL 3.0":
      section = "Licensed under the [GPLv3 License](https://www.gnu.org/licenses/gpl-3.0).";
      break;
    case "BSD 3":
      section = "Licensed under the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause).";
      break;
    case "None":
      section = "";
      break;
    default:
      section = "";
  }
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
