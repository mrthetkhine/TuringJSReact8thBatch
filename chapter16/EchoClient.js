const net = require("net");
const socket = net.createConnection({
    port :9000
},()=>{
    console.log('connected');
})
socket.write('Hello');
socket.on('data', (data) => {
    console.log(data.toString());
    socket.end();
  });
socket.on('end', () => {
    console.log('disconnected from server');
}); 
console.log('Done');