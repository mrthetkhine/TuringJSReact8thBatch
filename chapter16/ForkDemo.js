const child_process = require("child_process");
let child = child_process.fork(`${__dirname}/child.js`);
child.send({x: 4, y: 3});

child.on('message',data=>{
    console.log('Result ',data);
    child.disconnect();
});