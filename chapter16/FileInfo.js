const fs = require("fs");
let stats = fs.statSync("./demo.txt");
console.log('isFile ',stats.isFile());
console.log('isDir ',stats.isDirectory());
console.log('size ',stats.size);
console.log('uid ',stats.uid);
console.log('mode ',stats.mode.toString(8));