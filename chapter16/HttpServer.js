const net = require("net");
let server = net.createServer();
server.listen(9000,()=>console.log('http server started'));

server.on('connection',(socket)=>{
    console.log('new connection ');
    
    socket.on('data',(data)=>{
        
        let request = data.toString();
        //console.log('Request ', request);
        const lines = request.split('\r\n');
        console.log('status line ',lines[0]);
        let url = lines[0].split(" ")[1];
        console.log('URL ',url);

        let body ="<html><h1>Hello World</h1></html>";
        let response = "HTTP/1.1 200 OK\r\n";
        response += "\r\n";//header complete
        response+=body;
        
        socket.write(response);
        socket.end();
    });
   
});