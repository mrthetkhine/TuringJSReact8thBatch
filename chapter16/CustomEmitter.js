class OurEmitter
{
    listener ={};
    /*
        customEvent:[handlers....]
    * */
    constructor()
    {
        console.log('Init');
    }
    on(type,handler)
    {
        if(this.listener[type])
        {
            this.listener[type].push(handler);
        }
        else
        {
            this.listener[type]=[handler];
        }
    }
    emit(type,event)
    {
        let handlers = this.listener[type];
        if(handlers)
        {
            for(const handler of handlers)
            {
                handler(event);
            }
        }
    }

}
let emitter = new OurEmitter();
emitter.on('customEvent',(event)=>{
    console.log('Fired custom event ',event);
});

setTimeout(()=>{
    emitter.emit('customEvent',{
        data: 'hello'
    });
},3000);
emitter.on('customEvent',(event)=>{
    console.log('Fired custom event 2',event);
});

