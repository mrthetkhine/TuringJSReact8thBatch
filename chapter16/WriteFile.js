const fs = require("fs");

fs.writeFile('./demo2.txt','Hello World',(err,data)=>{
    if(!err)
    {
        console.log('Data=> ',data);
    }
});
console.log('Done');