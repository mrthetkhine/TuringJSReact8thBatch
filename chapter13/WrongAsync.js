const fs = require('fs');
console.log('start');
let start = new Date();
fs.readFile('hello.txt','utf-8',(err,data)=>{
    
    if(!err)
    {
        fs.readFile('hello2.txt','utf-8',(err2,data2)=>{
            if(!err2 )
            {
                console.log('Data1 ',data.toString().length);
                console.log('Data2 ',data2.toString().length);
                let end = new Date();
                let time = end- start;
                console.log("Time ",time);
            }
            
        });
        
    }
});
console.log('end');