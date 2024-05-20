const os = require("os");
const path = require("path");

console.log('Home ',os.homedir());
console.log('Host ',os.hostname());
console.log('type ',os.type());

console.log('sep ',path.sep);

let p = 'src/pkg/test.js';
console.log('base ',path.basename(p));
console.log('ext ',path.extname(p));
console.log('dir ',path.dirname(p));
console.log('normalized ',path.normalize("a/b/c/../d/"));