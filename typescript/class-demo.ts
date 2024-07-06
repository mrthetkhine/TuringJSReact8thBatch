class Human
{
    name: string;
    age! :number;
    constructor(name: string, age :number)
    {
        this.name= name;
        this.age = age;
        console.log("Human constructor");
    }
    display()
    {
        console.log("Name ",this.name, " Age ",this.age);
    }
}
class Teacher extends Human
{
    constructor(name:string,age:number)
    {
        super(name,age);
        console.log("Teacher constructor");
    }
    display(): void {
        super.display();
        console.log("Teacher display"); 
    }
}
let h = new Teacher("TK",29);
h.display();

let h2 = new Teacher("T2",10);