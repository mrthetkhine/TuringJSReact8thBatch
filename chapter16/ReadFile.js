const fs = require("fs");

fs.readFile('./demo.txt','utf-8',(err,data)=>{
    if(!err)
    {
        console.log('Data=> ',data.toString());
    }
});
console.log('Done');