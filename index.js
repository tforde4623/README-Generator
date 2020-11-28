const inquirer = require('inquirer');
const questions = require('./assets/questions')

// function to write readme file (using template string)
const writeReadMe = () => {
  // something here
}

// asking questions via CL with inquirer
inquirer
  .prompt(questions)
  .then(answers => {
    // write responses to README file
    console.log(answers); // returns an object of answers { key: 'name', value: 'response' }
  })