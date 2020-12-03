const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter Project Title: ',
            name: 'titleInput',
        },
        {
            type: 'input',
            message: 'Enter Description: ',
            name: 'descriptionInput',
        },
        {
            type: 'input',
            message: 'Enter Installation Instructions: ',
            name: 'installationInput',
        },
        {
            type: 'input',
            message: 'Enter Usage Information: ',
            name: 'usageInput',
        },
        {
            type: 'input',
            message: 'Enter Contributing: ',
            name: 'contributingInput',
        },
        {
            type: 'input',
            message: 'Enter Test Instructions: ',
            name: 'testsInput',
        },
        {
            type: 'checkbox',
            message: 'Select License Type: ',
            choices: ['MIT License', 'Apache License', 'GPL License'],
            name: 'licenseInput',
        },
        {
            type: 'input',
            message: 'Enter GitHub username: ',
            name: 'usernameInput',
        },
        {
            type: 'input',
            message: 'Enter GitHub username: ',
            name: 'usernameInput',
        },
        {
            type: 'input',
            message: 'Enter Email Address: ',
            name: 'emailInput',
        },
    ])
    .then((response) => {
        console.log(response.titleInput);
        console.log(response.descriptionInput);
        console.log(response.installationInput);
        console.log(response.usageInput);
        console.log(response.contributingInput);
        console.log(response.testsInput);
        console.log(response.licenseInput);
        console.log(response.usernameInput);
        console.log(response.emailInput);

const markdown = 
`
# ${response.titleInput}
### Description:
${response.descriptionInput}
### Installation:
${response.installationInput}
### Usage: 
${response.usageInput}
### Contributing: 
${response.contributingInput}
### Tests: 
${response.testsInput}
### Questions:
${response.usernameInput}
http://github.com - automatic!
[GitHub](http://github.com/${response.usernameInput})
Email me with addition questions at: ${response.emailInput}
`

    fs.writeFile('readme.md', markdown, (err) => {
        if (err) throw err;
        console.log("complete")
    })
});

