// Includes required packages to generate a read-me generator
const fs = require('fs');
const inquirer = require('inquirer');
const generator = require('./generator.js');
const licenses = ['Apache', 'BSD', 'GPL','MIT', 'None'];

// Creates arrays of questions for user to answer for the generator
const questions = [
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
      type: 'list',
      name: 'license',
      message: 'Input Project License',
      choices: licenses
  },

];

//Creates a function to write a README 
function writeToFile(fileName, data) {}

//Creates a function to initialize 
function init() {}

//Calling the initialize
init();