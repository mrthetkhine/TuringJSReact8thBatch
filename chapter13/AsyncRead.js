const fs = require('fs');
let start = new Date();
//console.log("Start");
let p1 = fs.promises.readFile('hello.txt');
let p2 = fs.promises.readFile('hello2.txt');
Promise.all([p1,p2]).then(data=>{
    let end = new Date();
    let time = end- start;
    console.log("Time ",time);
});
