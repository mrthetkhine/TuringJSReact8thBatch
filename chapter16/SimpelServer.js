const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");

const port = 9000;
let rootDirectory = __dirname;
let server = new http.Server(); 

let extToTypeMapping  ={
    ".html":"text/html",
    ".html":"text/html",
    ".js":"text/javascript",
    ".css":"text/css",
    ".png":"image/png",
    ".txt":"text/plain",
}
console.log('RootDirect ',__dirname);
server.on('request',(request,response)=>{
    let endpoint = url.parse(request.url).pathname;
    console.log('Endpoint ',endpoint);

    if(endpoint=="/")
    {
        response.write("<h1>Hello World</h1>");
        response.end();
    }
    else
    {
        try
        {
            let filename = endpoint.substring(1);
            console.log('filename>> ',filename);
            filename = filename.replace(/\.\.\//g, "");
            filename = path.resolve(rootDirectory, filename);
            
            let type = extToTypeMapping[path.extname(filename)] ||  "application/octet-stream";
            let stream = fs.createReadStream(filename);
            stream.once("readable", () => {
                response.setHeader("Content-Type", type);
                response.writeHead(200);
                stream.pipe(response);
            });
            stream.once("error", (error) => {
                response.setHeader("Content-Type","text/plain; charset=UTF-8");
                response.writeHead(404);
                response.end(error.message);
            });
        }
        catch(error)
        {
            response.setHeader("Content-Type","text/plain; charset=UTF-8");
            response.writeHead(404);
            response.end(error.message);
        }
        
    }
    
   
    
   
    
});
server.listen(port);