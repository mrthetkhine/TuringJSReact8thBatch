import {useReducer} from "react";

function todoReducer(todos,action)
{
    console.log('todos ',todos, ' Action ',action);
    switch (action.type)
    {
        case 'ADD_TODO':
            return [...todos,action.payload];
        case 'DELETE_TODO':
            return todos.filter(todo=>todo.id!= action.payload.id);
        default:
            return todos;
    }
    return todos;
}

let initTodos = [
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
        title: 'Task '+todoId
    }
}
function addTodoAction(todo)
{
    return {
        type:'ADD_TODO',
        payload:todo
    }
}
function deleteTodoAction(todo)
{
    return {
        type:'DELETE_TODO',
        payload:todo
    }
}
export default function TodoWithReducer()
{
    const [todos,dispatch ]= useReducer(todoReducer,initTodos);
    const addToDoHandler= ()=>{
        const newTodo = nexTodo();
        console.log('NewTodo ',newTodo);
        dispatch(addTodoAction(newTodo));
        /*dispatch({
            type:"ADD_TODO",
            payload: newTodo
        })*/
    }
    const btnDeleteHandler= (todoToDelete)=>{
        dispatch(deleteTodoAction(todoToDelete));
    }
    return (<div>
        Todo with reducer.
        <div>
            <button type={"button"} onClick={addToDoHandler}>Add</button>
        </div>

        {
            todos.map(todo=><div key={todo.id}>
                {todo.title}
                &nbsp;
                    <button type={"button"} onClick={()=>btnDeleteHandler(todo)}>Delete</button>

            </div>)
        }
    </div>);
}