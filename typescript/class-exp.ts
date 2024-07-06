const someClass = class<Type> {
  content: Type;
  constructor(value: Type) {
    this.content = value;
  }
};
 
let obj = new someClass('Hello');
console.log(obj);