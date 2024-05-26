const net = require("net");
let server = net.createServer();
server.listen(9000,()=>console.log('server started'));

server.on('connection',(socket)=>{
    console.log('new connection ');
    socket.on('data',(data)=>{
        console.log('Data received ',data.toString());
    });
    socket.write("Hello "+new Date());
    socket.end();
});