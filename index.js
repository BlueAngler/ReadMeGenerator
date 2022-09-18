const fs = require('fs')

fs.writeFile('README.md', process.argv[1], (err) =>
err ? console.error(err) : console.log('Successfully create a README file!')
); 


