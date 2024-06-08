let Todos = require('../model/ToDo');
let todos = [
    {
        id:1,
        title:'Task1'
    },
    {
        id:2,
        title:'Task2'
    },
]
async function getAllTodos()
{
    return Todos.find();
}
async function getTodoById(id)
{
    return Todos.findById(id);
}
async function saveTodo(todo)
{
    let newToDo = new Todos(todo);
    return newToDo.save();
}
async function updateTodo(todoId,todo)
{
    let updateTodo = await Todos.findByIdAndUpdate(todoId,todo,{new:true});
    return updateTodo;
}
async function deleteTodo(todoId)
{
    let todo = await Todos.findById(todoId)
    if(!todo)
    {
        throw new Error({message: 'Todo Id not found'});
    }
    let deletedTodo = await Todos.findByIdAndDelete(todoId);
    return deletedTodo;
}
module.exports ={
    getAllTodos,
    getTodoById,
    saveTodo,
    updateTodo,
    deleteTodo,
}