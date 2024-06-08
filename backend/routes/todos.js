var express = require('express');
var router = express.Router();
const todos = require('./../controller/TodosController');

router.get('/',todos.getAllTodo);
router.get('/:todoId',todos.getTodoById);
router.post('/',todos.saveTodo);
router.put('/:todoId',todos.updateTodo);
router.delete('/:todoId',todos.deleteTodo);
module.exports = router;