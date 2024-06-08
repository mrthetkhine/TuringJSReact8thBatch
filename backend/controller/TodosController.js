let todoService = require('./../service/TodosService');
async function getAllTodo(req,res,next)
{
    let todos = await todoService.getAllTodos();
    res.json(todos);
}
async function getTodoById(req,res,next)
{
    let id = req.params['todoId'];
    try {

        let todo =await todoService.getTodoById(id);
        if(todo)
        {
            res.status(200).json(todo);
        }
    }
    catch(error)
    {
        res.status(404).json({
            error
        });
    }


}
async function saveTodo(req,res,next)
{
    let todo = req.body;
    try
    {
        let newTodo = await todoService.saveTodo(todo);
        if(newTodo)
        {
            res.status(201).json(newTodo);
        }
        else
        {
            res.status(400).json(newTodo);
        }
    }
    catch(err)
    {
        res.status(400).json({
            err
        });
    }

}
async function updateTodo(req,res,next)
{
    let todoId = req.params['todoId'];
    let todo = req.body;
    try
    {
        let updatedTodo = await todoService.updateTodo(todoId,todo);
        if(updatedTodo)
        {
            res.json(updatedTodo);
        }
    }
    catch(e)
    {
        res.status(400).json({
            error:e
        });
    }
}
async function deleteTodo(req,res,next)
{
    let todoId = req.params['todoId'];

    try
    {
        let deletedTodo = await todoService.deleteTodo(todoId);
        if(deletedTodo)
        {
            res.json(deletedTodo);
        }
    }
    catch(e)
    {
        console.log(e);
        res.status(400).json({
            error:e
        });
    }
}
module.exports = {
    getAllTodo,
    getTodoById,
    saveTodo,
    updateTodo,
    deleteTodo,
}