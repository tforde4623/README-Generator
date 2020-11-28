// readme layout
const createTemplate = data => {
  return (
`## ${data.title}
***

### Description
***
${data.desc}

### Installation
***
${data.installationInstructions}

### Usage
***
${data.useInfo}

### Credits
***
${data.credits}

### License
***
${data.license}`
// ... more
  )
}
module.exports = createTemplate;