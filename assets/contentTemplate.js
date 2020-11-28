// readme layout
const content =
  `
  # ${data.title}
  ***
  ## Description
  ***
  ${data.desc}
  ## Table of Contents
  1. [Installation] (#//headline of section)
  2. [Usage] ()
  3. [Credits] ()
  4. [License] ()
  ***
  ## Installation
  ***
  ${data.installationInstructions}
  ## Usage
  ***
  ${data.useInfo}
  ## Credits
  ***
  ${data.credits}
  ## License
  ***
  ${data.license}
  `
  // ... more

module.exports = content;