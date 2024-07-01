type Todo ={
    id:number,
    title: string,
    completed?:boolean
};

let todo: Todo = {
    id : 1,
    title: 'Task1',
    completed:false,
}
let todos: Todo[];
type ID = number | string;
let data: ID ;
data = "199";
data = 2992;

type MyNumber = number;
/*
type Todo = {
    something :string,
}*/
interface Point {
    x: number;
    y: number;
}
interface Point {
   
    z: number;
}
let point:Point = {
    x: 10,
    y : 20,
    z : 30
}