const child_process = require("child_process");
const child = child_process.spawn("mkdir",["test"]);
child.on('exit', function (code, signal) {
    console.log('child process exited with ' +
                `code ${code} and signal ${signal}`);
});
  