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
    type: 'list',
    name: 'license',
    message: 'Project license?',
    // list of possible answers to be displayed
    choices: ['MIT', 'GNU', 'GPL', 'LGPL', 'Creative Commons',
      'Apache 2.0', 'BSD 2-Clause', 'BSD 3-Clause', 'Mozilla Public 2.0',
      'Common Dev. & Distro.', 'Eclipse Public']
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