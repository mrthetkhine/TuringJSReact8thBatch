import {useReducer} from "react";
import useCustomReducer from "./hook/useCustomReducer";

export function todoReducer(todos,action)
{
    console.log('todos ',todos, ' Action ',action);
    switch (action.type)
    {
        case 'ADD_TODO':
            return [...todos,action.payload];
        case 'DELETE_TODO':
            return todos.filter(todo=>todo.id!= action.payload.id);
        case 'UPDATE_TODO':
            return todos.map(todo=>todo.id== action.payload.id?action.payload:todo);
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
export function addTodoAction(todo)
{
    return {
        type:'ADD_TODO',
        payload:todo
    }
}
export function deleteTodoAction(todo)
{
    return {
        type:'DELETE_TODO',
        payload:todo
    }
}
export function updateTodoAction(todo)
{
    return {
        type:'UPDATE_TODO',
        payload:todo
    }
}
export default function TodoWithReducer()
{
    //const [todos,dispatch ]= useReducer(todoReducer,initTodos);
    const [todos,dispatch ]= useCustomReducer(todoReducer,initTodos);
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
    const btnUpdateHandler =(todo)=>{
        todo.title += ' Update';
        dispatch(updateTodoAction(todo));
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
                <button type={"button"} onClick={()=>btnUpdateHandler(todo)}>update</button>
                &nbsp;
                <button type={"button"} onClick={()=>btnDeleteHandler(todo)}>Delete</button>

            </div>)
        }
    </div>);
}