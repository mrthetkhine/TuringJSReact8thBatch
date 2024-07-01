const names = ["Alice", "Bob", "Eve"];
names.forEach(s=>{
    console.log(s.toUpperCase());
})

function display(obj:{
    name : string,
    age? : number
})
{
    console.log('Name ',obj.name);
}
display({name : "TK"});