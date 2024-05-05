const fs = require('fs');
console.log('start');
fs.readFile('helloworld.txt','utf-8',(err,data)=>{
    
    if(!err)
    {
        console.log('Data ',data.toString());
    }
});
console.log('end');