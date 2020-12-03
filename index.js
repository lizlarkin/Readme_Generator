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

let shield = ""
if (response.licenseInput == "MIT License") {
    shield = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
} else if (response.licenseInput == 'Apache License') {
    shield = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
} else {
    shield = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
}

let notice = ""
if (response.licenseInput == "MIT License") {
    notice = "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
} else if (response.licenseInput == 'Apache License') {
    notice = "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
} else {
    notice = "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights."
}



const markdown = 
`
# ${response.titleInput}
${shield}
## Table of Contents:
- [Description](###Description)
- [Installation](###Installation)
- [Usage](###Usage)
- [Contributing](###Contributing)
- [Tests](###Tests)
- [License](###License)
- [Questions](###Questions)

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
### License: 
${response.licenseInput}: ${notice}
### Questions:
${response.usernameInput}
* [${response.usernameInput} GitHub Link](http://github.com/${response.usernameInput})
* [Email me with addition questions at: ${response.emailInput}
`

    fs.writeFile('readme.md', markdown, (err) => {
        if (err) throw err;
        console.log("complete")
    })
});

