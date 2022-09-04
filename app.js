const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');

const pageHTML = generatePage('jane', 'github');


fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw err;
});

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));