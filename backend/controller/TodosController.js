var todoService = require('./../service/TodosService');
function getAllTodo(req,res,next)
{
    return res.json(todoService.getAllTodo());
}
function getTodoById(req,res,next)
{
    let id = req.params['todoId'];
    res.json(todoService.getTodoById(id));
}
function saveTodo(req,res,next)
{
    let todo = req.body;
    console.log('Todo ',todo);
    res.json(todoService.saveTodo(todo));
}
module.exports = {
    getAllTodo,
    getTodoById,
    saveTodo,
}