class Container
{
    items:string;
    constructor(items:string)
    {
        this.items =items;
    }
}
class NumContainer
{
    items:number;
    constructor(items:number)
    {
        this.items =items;
    }
}
let con:Container = new Container('hi');
class GenContainer<T>
{
    item:T;
    constructor(item:T)
    {
        this.item = item;
    }
}
let c1 = new GenContainer<string>('HI');
console.log(c1.item.toUpperCase());

let c2 = new GenContainer<number>(100);
console.log(c2.item.toFixed());