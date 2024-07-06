class OurArray<Type>
{
    items: Type[];
    constructor(items:Type[])
    {
        this.items = items;
    }
    getFirst():Type
    {
        return this.items[0];
    }
}
let arr:OurArray<number> =new OurArray([10,20,30]);
console.log(arr.getFirst());