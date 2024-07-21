"use client";
import TodoApiUI from "@/app/components/todos/TodoApiUI";
import {useState} from "react";
import {useAddTodoMutation} from "@/lib/features/todo/todosApiSlice";
import {Todo} from "@/lib/features/todo/todoSlice";

console.log('Todo page BACKEND URL ',process.env.BACKEND_URL);
function TodoInput()
{
    const [addTodoApi,addTodoResult] = useAddTodoMutation();
    const [todoText,setTodo] = useState('');
    const btnAddHandler =()=>{
        console.log('Add Todo ');
        const todoPayload:Partial<Todo> = {
            title: todoText,
            completed:false,
        };
        addTodoApi(todoPayload)
            .unwrap()
            .then(data=>{
                console.log('Add success ',data);
                setTodo('');

            },error=>{
                console.log('Add error ',error);
            })
    };
    return(<div >
        <input type={"text"} value={todoText}
               className={"form-control"}
               onChange={(event => setTodo(event.target.value))}/>
        &nbsp;
        <button type={"button"} className={"btn btn-primary"}
                onClick={btnAddHandler}>Add</button>
    </div>);
}
export default function TodosPage()
{
    console.log('Todo page UI component ',process.env.NEXT_PUBLIC_BACKEND_URL);
    return (<div>
        Todos Pages

        <TodoInput/>
        &nbsp;
        <TodoApiUI/>
    </div>);
}