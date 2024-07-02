/*
function firstElement(arr:any[]):any
{
    return arr[0];
}

console.log('firsElement ',firstElement([1,2,3,'Hello']).toUpperCase());
*/
function firstElement<T>(arr:T[]):T
{
    return arr[0];
}
console.log('firsElement ',firstElement<number>([1,2,3]));
console.log('firsElement ',firstElement(["hi","Hello"]).toUpperCase());