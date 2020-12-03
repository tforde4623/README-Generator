// readme layout
const createTemplate = data => {
  return (
    `# __${data.title}__


## __Description__
***
${data.desc}

## __Installation__
***
${data.installationInstructions}

## __Usage__
***
${data.useInfo}

## __Credits__
***
${data.credits}

## __License__
***
${data.license}`
    // ... more
  )
};

module.exports = createTemplate;