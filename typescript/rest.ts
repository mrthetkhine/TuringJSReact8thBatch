function sum(...num:number[])
{
    let total = 0;
    for(let i=0;i<num.length;i++)
    {
        total += num[i];
    }
    return total;
}
console.log(sum(1,2,3));
console.log(sum(1,2,3,4));