// "importing" inquirer module
const inquirer = require('inquirer');

// asking questions via CL with inquirer
inquirer
  .prompt([
    // title (title)
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?'
    },
    // description (desc)
    {
      type: 'input',
      name: 'desc',
      message: 'Description of your project?'
    },
    // installation instructions (instalInstructions)
    {
      type: 'input',
      name: 'instalInstructions',
      message: 'Installation instructions?'
    },
    // usage information (useInfo)
    {
      type: 'input',
      name: 'useInfo',
      message: 'Usage information?'
    },
    // contributions (contributing)
    {
      type: 'input',
      name: 'contributing',
      message: 'Contributions?'
    },
    // tests
    {
      type: 'input',
      name: 'tests',
      message: 'Tests?'
    }
    // ...
])