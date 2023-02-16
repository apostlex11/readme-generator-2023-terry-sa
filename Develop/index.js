// Includes required packages to generate a read-me generator
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./utils/generateMarkdown');
const licenses = ['Apache', 'BSD', 'GPL','MIT', 'None'];

// Creates arrays of questions for user to answer for the generator
inquirer
.prompt([
{ 
      type: 'input',
      name: 'title',
      message: 'Input Project Title:'
  },

  {
      type: 'input',
      name: 'description',
      message: 'Input Projects description:',
  },

  {
      type: 'input',
      name: 'install',
      message: 'Input installation instructions:',
  },
  {
      type: 'input',
      name: 'usage',
      message: 'Input a "how-to" for application'
  },
  {
      type: 'input',
      name: 'credits',
      message: 'List Collaborators:'
  },
  {
      type: 'list',
      name: 'license',
      message: 'Select Project License',
      choices: ['Apache', 'BSD', 'GNU', 'MIT', 'None'],
  },
  {
      type: 'input',
      name: 'contributing',
      message: 'If you would like other developers to contribute:'
  },
  {
      type: 'input',
      name: 'tests',
      message: 'Write tests for your application:'
  },
  {
      type: 'input',
      name: 'github',
      message: 'Enter your Github Username:'
  },
  {
      type: 'input',
      name: 'email',
      message: 'Enter your Email:'
  },
])

.then((answers)=> {
    console.log(answers);
    const readMeContent = generateReadme(answers);
    fs.writeFile('README.md', readMeContent, (err)=>
      err ? console.log(err) : console.log('Success, README.md created!')
    );
});
