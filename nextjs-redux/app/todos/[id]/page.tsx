"use client";
import {useGetAllTodosQuery, useGetTodoByIdQuery} from "@/lib/features/todo/todosApiSlice";

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
    if(isSuccess)
    {
        return (<h1> {todo.title}</h1>);
    }
    return (<div>
        Todo details {params.id}
    </div>);
}