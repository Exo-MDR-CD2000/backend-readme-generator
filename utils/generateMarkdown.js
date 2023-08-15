// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function getLicenseBadge(license) {
  let badge = "";
  switch (license) {
    case "MIT":
      badge = "https://img.shields.io/badge/License-MIT-brightgreen.svg";
      break;
    case "APACHE 2.0":
      badge = "https://img.shields.io/badge/License-Apache%202.0-yellow.svg";
      break;
    case "GPL 3.0":
      badge = "https://img.shields.io/badge/License-GPLv3-orange.svg";
      break;
    case "BSD 3":
      badge = "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";
      break;
    case "LGPL 3.0":
      badge = "https://img.shields.io/badge/License-LGPL%203.0-blueviolet.svg";
      break;
    case "None":
      badge = "";
      break;
    default:
      badge = "";
  }
  return badge;
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
const renderLicenseSection = (license) => {
  const licenseBadge = getLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  if (!licenseBadge) {
    return "";
  }
  return `## License\n
This project is licensed under [![License](${licenseBadge})](${licenseLink})
`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## How to Contribute
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Credits
  ${data.credits}

  ${renderLicenseSection(data.license)}

  ## Questions
  If you have any questions, please contact me at my [email](${data.email}) or visit my GitHub page at [GitHub Profile](https://github.com/${data.github}).
  
`;
}

module.exports = generateMarkdown;


//did not realize this file earlier. If I can get this working, then it will demonstrate importing and exporting code as well as understanding modularization.
