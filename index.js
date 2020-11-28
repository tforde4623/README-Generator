const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./assets/questions');
const createTemplate = require('./assets/contentTemplate');

// function to write readme file (using template string)
const writeReadMe = (data) => {
  fs.writeFile(
    "README.md",
    createTemplate(data),
    err => { if (err) throw err }
  );
}

// asking questions via CL with inquirer
inquirer.prompt(questions)
  .then(answers => { writeReadMe(answers); })
  .catch(err => { if (err) throw err; });

