function greet(person) {
    return "Hello " + person.name;
}
var obj = {
    name: 'TK',
    age: 39
};
console.log(greet(obj));
/*
console.log(greet({
    name: 'Someone',
    age: 39,
    address: 'Ok'
}));
*/
var obj2 = {
    name: 'Someone',
    age: 39,
    address: 'Ok'
};
var obj3 = obj2;
console.log(obj3);
