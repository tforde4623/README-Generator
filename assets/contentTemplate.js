// readme layout
const createTemplate = data => {
  return (
    `# __${data.title}__


## __Description__
${data.desc}

## __Installation__
${data.installationInstructions}

## __Usage__
${data.useInfo}

## __Credits__
${data.credits}

## __License__
${data.license}

## __Contributions__
${data.contributing}

## __Testing Instructions__
${data.testInstructs}`
    // ... more
  )
};

module.exports = createTemplate;
