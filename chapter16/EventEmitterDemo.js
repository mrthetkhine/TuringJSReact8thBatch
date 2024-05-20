const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on('customEvent',(event)=>{
    console.log('CustomEvent fired ',event);
});

setTimeout(()=>{
    eventEmitter.emit('customEvent',{
        data : "Hello World"
    });
},3000);
console.log('Dones');
eventEmitter.on('customEvent',(event)=>{
    console.log('CustomEvent fired 2',event);
});
