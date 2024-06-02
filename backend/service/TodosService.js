
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
function getAllTodo()
{
    return todos;
}
function getTodoById(id)
{
    return todos.filter(todo=>todo.id==id);
}
function saveTodo(todo)
{
    todos.push(todo);
    return todo;
}
module.exports ={
    getAllTodo,
    getTodoById,
    saveTodo,
}