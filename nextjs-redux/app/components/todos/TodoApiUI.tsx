"use client";

import {useGetAllTodosQuery} from "@/lib/features/todo/todosApiSlice";
import TodosUI from "@/app/components/todos/TodosUI";

export default function TodoApiUI()
{
    const { data, isError, isLoading, isSuccess } = useGetAllTodosQuery();
    if (isError) {
        return (
            <div>
                <h1>There was an error!!!</h1>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }
    if(isSuccess)
    {
        return(<div>
            {
                data.map(todo=><div key={todo._id}>{todo.title}</div>)
            }
        </div>)
    }

}