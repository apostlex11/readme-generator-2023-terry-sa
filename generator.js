// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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
  
  // Creates a function to link to specified license, if there are no license it will return empty
  function LicenseLinks(license) {
    let licenseLink; 
    switch(license) {
      case "Apache":
        licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
        break;
      case "BSD":
        licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
        break; 
      case "GPL":
        licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
        break;
      case "MIT":
        licenseLink = "https://mit-license.org/";
        break;
      default:
        licenseLink = "";
        break;  
    }
      return licenseLink = "";
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function LicenseSections(license) {
    if (license != "None") {
      licenseSect += "## License\n"
      licenseSect += "Please see " + LicenseLink(license) + "to get more detailed information on this License"
    }
    return licenseSect;
  }
  
  // TODO: Create a function to generate markdown for README
  function generator(data) {
    return `# ${data.title}
    ## Table of Contents 
    - [Project Description](#Description)
    - [Usage](#Usage)
    - [Contributors](#Contributors)
    - [Questions](#Questions)
    - [License](#License)
    ## Description 
    ${answers.description}
    ## Usage 
    ${answers.usage}
    ## Installation
    ${answers.installation}
    ## Contributors
    ${answers.contributors}
    ## Questions 
    ${answers.questions}
    ## License 
    ${answers.license}
  `;
  }
  
  module.exports = generator;