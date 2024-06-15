import {useState} from "react";

let initItems = [
    {
        id:1,
        title:'Task1',
    },
    {
        id:2,
        title: 'Task 2',
    }

];
let id = 3;
function nexTodo(title)
{
    let todoId = id++;
    return {
        id: todoId,
        title: title
    }
}
function TodoItem({todo,updateTodo,deleteTodo})
{
    const btnUpdateHandler = ()=>{
        todo.title += ' Updated';
        updateTodo(todo);
    };
    const btnDeleteHandler = ()=>{
        deleteTodo(todo);
    }
    return (<div>
        {todo.title}
        &nbsp;
        <button type={"button"} onClick={btnUpdateHandler}>Update</button>
        &nbsp;
        <button type={"button"} onClick={btnDeleteHandler}>Delete</button>
    </div>);
}
export default function UpdateListDemo()
{
    const [todoText,setTodoText] = useState('');
    const [todos,setTodos] = useState(initItems);

    const todoTextOnChangeHandler =(e)=>{
      setTodoText(e.target.value);
    };
    const addToDoHandler= ()=>{
        const newTodo = nexTodo(todoText);
        setTodos([...todos, newTodo]);
        console.log('Todos ',todos);
    }

    function updateTodo(updateTodo)
    {
        console.log('Update todo ',updateTodo);
        const newTodos = todos.map(todo=>todo.id==updateTodo.id?updateTodo:todo );
        setTodos(newTodos);

    }
    function deleteTodo(todoToDelete)
    {
        const newTodos = todos.filter(todo=>todo.id!=todoToDelete.id);
        console.log('Delete todo ',todoToDelete);
        setTodos(newTodos);
    }
    //console.log('Render');
    return (<div>
        <h1>Todo list</h1>
        <input type={"text"}
               value={todoText}
                onChange={todoTextOnChangeHandler}/>
        <button type={"button"} onClick={addToDoHandler}>Add</button>
        {
            todos.map(todo=><TodoItem key={todo.id}
                                      todo={todo}
                                      updateTodo={updateTodo}
                                      deleteTodo={deleteTodo}  />)
        }
    </div>)
}