"use client";
import {
    useAddTodoMutation,
    useGetAllTodosQuery,
    useGetTodoByIdQuery,
    useUpdateTodoMutation
} from "@/lib/features/todo/todosApiSlice";
import {useState} from "react";
import {Todo} from "@/lib/features/todo/todoSlice";

export default function TodoDetails({ params }: { params: { id: string } })
{
    /*const { data, isError, isLoading, isSuccess } = useGetTodoByIdQuery(params.id,{
       /!* pollingInterval: 2000,*!/

    });*/
    const { todo, isError, isLoading, isSuccess } = useGetAllTodosQuery(undefined,{
        selectFromResult: ({ data }) => ({
            todo: data?.find((todo) => todo._id === params.id),
        }),
    });
    const [updateTodoApi,updateTodoResult] = useUpdateTodoMutation();
    if(isSuccess)
    {
        return (<h1> {todo.title}</h1>);
    }
    const [todoText,setTodoText] = useState('')
    const btnUpdateHandler = ()=>{
        const updateTodo:Todo ={
            ...todo,
            title: todoText
        }
        console.log('update todo ',updateTodo);
        updateTodoApi(updateTodo)
            .unwrap()
            .then(data=>console.log('Update success ',data));
    }
    return (<div>
        Todo details
        <div>
            <input type={"text"}
                   value={todoText}
                   onChange={(event)=>setTodoText(event.target.value)}/>
            <button type={"button"} className={"btn btn-primary"} onClick={btnUpdateHandler}>
                Update
            </button>
            <h3>{todo.title}</h3>
        </div>
    </div>);
}