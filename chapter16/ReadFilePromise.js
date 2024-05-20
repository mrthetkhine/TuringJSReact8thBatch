const { read } = require("fs");

const fs = require("fs").promises;

fs.readFile('./demo.txt','utf-8')
   .then(data=>console.log('Data=> ',data.toString()))
console.log('Done');

async function readDemo()
{
    let data = await fs.readFile('./demo.txt','utf-8');
    console.log('Data ===> ',data.toString());
}
readDemo();