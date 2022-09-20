const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Project Title?',
    },
    {
      type: 'input',
      message: 'Description',
      name: 'ReadmeDescription',
      
    },
    {
      type: 'input',
      message: 'Install instructions?',
      name: 'Installation',
      
    },
    {
        type: 'input',
        message: 'Usage Information',
        name: 'READMEDESCRIPTION',
        
      },
      {
        type: 'input',
        message: 'Contribution Guidelines',
        name: 'Guidelines',
        
      },
      {
        type: 'input',
        message: 'Test Instructions',
        name: 'Instructions',
        
      },
  ])

  


fs.writeFile('README.md', process.argv[1], (err) =>
err ? console.error(err) : console.log('Successfully create a README file!')
); 


 