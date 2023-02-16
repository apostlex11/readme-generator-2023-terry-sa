// TODO: Create a function that returns a license badge based on which license is passed in
function LicenseBadge(license) {
    let badge = "";
    if (license !='None') {
     return ""; 
    } 
    else {
      badge = "![License Badge](https://shields.io/badge/license-" + license + "-blue)";
      return badge;
    }
  }
  
// a switch statement to return the license badge with link.
function getLicenseBadge(license) {
  switch (license) {
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'BSD':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    case 'GNU':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      default: 
      return ``
    }
    
  }

//github input
function getGH(github) {
  if(github === 'N/A') {
    return `N/A`
  } else {
    return `https://github.com/${github}`
  }
}
  
//returns license coverage
  function renderLicenseSection (license) {
    switch (license) {
      case 'Apache':
        return 'This application is covered under the Apache 2.0 license'
      case 'BSD':
        return 'This application is covered under the BSD 3-Clause license'
      case 'GNU':
        return 'This application is covered under the GNU GPL v3 license'
      case 'MIT':
        return 'This application is covered under the MIT license'
      default:
        return `N/A`
    }
  }
  
// TODO: Create a function to generate markdown for README
function generateReadme({title, description, installation, usage, credits, license, contributing, tests, github, email}) {

return `# ${title} 
${getLicenseBadge(license)}
## Description
${description}
  
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${installation}
## Usage
${usage}
## Credits
${credits}
## License
${renderLicenseSection(license)}
## Contributing
${contributing}
## Tests
${tests}
## Questions
Contact me by email here: ${email}
My GitHub: ${getGH(github)}
`;
}

module.exports = generateReadme;
