interface OurArray<Type>
{
    items:Type[];
    push(item:Type):void;
    pop():Type;
}
let arr: OurArray<number> = {
    items: [1,2,3],
    push(item:number)
    {
        this.items.push(item);
    },
    pop()
    {
        return this.items.pop() || NaN;
    }
}
arr.push(20);
console.log(arr);