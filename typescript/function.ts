function add(x:number,y:number):number
{
    return x+y;
}
let data = add(1,3);
console.log('Data ',data);

function isEven(x:number):boolean
{
    return x % 2==0;
}
type PredicateFun = (x:number)=>boolean;
//HOF
function not(predicate:PredicateFun)
{
    return function(n:number)
    {
        return !predicate(n);
    }
}
const isOdd =not (isEven);
console.log('isOdd ',isOdd(3));