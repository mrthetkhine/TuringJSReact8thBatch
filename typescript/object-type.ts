interface Person  
{
    name:string;
    age : number;
}
interface Another
{
    name: string;
    age : number;
}
function greet(person: Person) {
    return "Hello " + person.name;
}
let obj :Another = {
    name : 'TK',
    age : 39
}
console.log(greet(obj));

/*
console.log(greet({
    name: 'Someone',
    age: 39,
    address: 'Ok'
}));
*/
let obj2 ={
    name: 'Someone',
    age: 39,
    address: 'Ok'
};
let obj3:Person = obj2;
console.log(obj3);