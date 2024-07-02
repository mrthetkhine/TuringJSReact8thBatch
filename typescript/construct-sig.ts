class Human
{
    name:string;
    constructor(name:string)
    {
        this.name = name;
        console.log('Human constructor ',this.name);
    }
}
class Teacher
{
    name:string;
    constructor(name:string)
    {
        this.name = name;
        console.log('Teacher constructor ',this.name);
    }
}
type SomeConstructor = {
  new (s: string): object;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
fn(Human);
fn(Teacher);