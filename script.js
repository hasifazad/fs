// let readline = require('readline')
import readline from 'readline'


// Create an interface for input and output
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user a question
read.question('What is your name? ', (name) => {
    
    console.log(`Hello, ${name}!`);

    // Close the readline interface
    read.close();
});




