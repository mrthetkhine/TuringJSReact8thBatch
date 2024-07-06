function getFirst<Type>(items: Type[])
{
    return items[0];
}
let first = getFirst<string>(["hello","hi"]);
console.log('First ',first);

let another = getFirst([10,20,30]);
console.log('Another ',another);