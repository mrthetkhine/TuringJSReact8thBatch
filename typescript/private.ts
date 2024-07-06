class MyBox
{
    #x:number;
    constructor(data:number)
    {
        this.#x= data;
    }
}
let obj = new MyBox(10);
let data:any = obj;
console.log("data ",data.x);