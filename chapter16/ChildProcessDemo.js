const child_process = require("child_process");
/*
let listing = child_process.execSync("ls -l *.js",{encoding: "utf8"});
console.log(listing);
*/
child_process.exec('ls -lh', (error, stdout, stderr) => {
    if (error) {
      console.error(`error: ${error.message}`);
      return;
    }
  
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
  
    console.log(`stdout:\n${stdout}`);
  });