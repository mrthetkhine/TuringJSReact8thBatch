const fs = require('fs');
let start = new Date();

try {
    //console.log("Start");
    const data = fs.readFileSync('hello.txt', 'utf8');
    //console.log(data);
    const data2 = fs.readFileSync('hello2.txt', 'utf8');
    let end = new Date();
    let time = end- start;
    console.log("Time ",time);
} catch (err) {
  console.error(err);
}
