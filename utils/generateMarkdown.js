// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return "";
  } else {
    return `[GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n* [${license}](#license)\n`
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `-[License](#license)`
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.title}


  ## Badges
  ${renderLicenseBadge(data.license)}
  
  
  ## Table of Contents
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  ${renderLicenseSection(data.license)}
  -[Contributing](#contributing)
  -[Tests](#tests)
  -[Questions](#questions)
  
  
  ## Description
  ${data.description}
  
  
  ## Installation
  ${data.install}
  
  
  ## Usage
  ${data.usage}


  ## License
  ${renderLicenseLink(data.license)}
      
      
  ## Contributing
  ${data.contributor}
  
  
  ## Tests
  ${data.test}
  
  
  ## Questions
  [My GitHub link](https://github.com/${data.github})
      
  Email to reach me with additional questions: ${data.email}
  `


}

module.exports = generateMarkdown;
