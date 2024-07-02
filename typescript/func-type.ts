function add(x:number,y:number):number
{
    return x+y;
}
function sub(x:number,y:number):number
{
    return x-y;
}
function isEven(x:number):boolean
{
    return x % 2==0;
}
type BinaryFun = (x:number,y:number)=>number;
let fun:BinaryFun = add;
//fun = isEven;

function greet()
{
    console.log("Hello");
}
type Callback = ()=>void;
let callback : Callback = greet;
callback();