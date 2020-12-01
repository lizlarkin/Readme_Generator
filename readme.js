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
        // {
        //     type: 'input',
        //     message: 'Enter License: ',
        //     name: 'licenseInput',
        // },
        // {
        //     type: 'input',
        //     message: 'Enter Questions: ',
        //     name: 'questionsInput',
        // },
    ])
    .then((response) => {
        console.log(response.titleInput);
        console.log(response.descriptionInput);
        console.log(response.installationInput);
        console.log(response.usageInput);
        console.log(response.contributingInput);
        console.log(response.testsInput);


    const markdown = `
        <h1>${response.titleInput}</h1>
        <h3>Description:</h3>
        <p> ${response.descriptionInput}</p>
        <h3>Installation:</h3>
        <p>${response.installationInput}</p>
        <h3>Usage: </h3>
        <p>${response.usageInput}</p>
        <h3>Contributing: </h3>
        <p>${response.contributingInput}</p>
        <h3>Tests: </h3>
        <p>${response.testsInput}</p>
    `

    fs.writeFile('readme.md', markdown, (err) => {
        if (err) throw err;
        console.log("complete")
    })
});