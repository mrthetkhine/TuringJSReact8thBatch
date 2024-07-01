let arr = ["Hello",'Hi'];
console.log(arr[0].toLowerCase());

let arr2: Array<number> = [10,20];
let arr3:number[] = [10,20,30,40];

function greet(msg:string)
{
    console.log('Msg ',msg);
}
greet('Hello');
//greet(123);

function add(x:number, y:number):number
{
    return x+y;
}

let k = add(1,2);
console.log(k);