const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const questions = [
    {
        type: "input",
        name:"title",
        message: "What's the title of this project?",
    },
    {
        type: "input",
        name:"description",
        message: "Briefly describe your project.",
    },
    {
        type: "input",
        name:"installation",
        message: "How do you install this app?",
    },
    {
        type: "input",
        name:"use",
        message: "How do you use this app?",
    },
    {
        type: "input",
        name:"contribution",
        message: "How can people contribute?",
    },
    {
        type: "input",
        name:"email",
        message: "What is your email?",
    },
    {
        type: "input",
        name:"screenshot",
        message: "Please provide a link for a screenshot of your project",
    }
];

// function to write README file
function writeToFile(res) {
    fs.writeFile("README.md", 
    `# ${res.title}

    ## Description
    ${res.description}

    ## Installation
    ${res.installation}

    ## Usage
    ${res.use}

    ## Contributing
    ${res.contribution}

    ## Contact me
    Feel free to contact me if you have any questions at ${res.email}!

    ## Screenshot
    ![]("${res.screenshot}")
    `, 
    (err)=> err ? console.error(err) : console.log("README generated.")) 
};

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(data => {
        writeToFile(data)
    })
};

// function call to initialize program
init();
