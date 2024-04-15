const { exec } = require('child_process');
 
// Execute the `pwd` command
exec('pwd', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing command: ${error}`);
        return;
    }
 
    // Output the result of the `pwd` command
    console.log(`Current working directory: ${stdout}`);
});
