const questions = [
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
    name: 'installationInstructions',
    message: 'Installation instructions?'
  },
  // usage information (useInfo)
  {
    type: 'input',
    name: 'useInfo',
    message: 'Usage information?'
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Credits? Collaborators? Third party assets? Tutorials?'
  },
  {
    type: '',
    name: 'license',
    message: 'Project license?'
  },
  // contributions (contributing)
  {
    type: 'input',
    name: 'contributing',
    message: 'Contributions?'
  },
  // tests (testInstructs)
  {
    type: 'input',
    name: 'testInstructs',
    message: 'Testing instructions?'
  }
  // ...
];

module.exports = questions;