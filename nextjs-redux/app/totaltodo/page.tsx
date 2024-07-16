"use client";
import {useGetAllTodosQuery} from "@/lib/features/todo/todosApiSlice";

export default function Page()
{
    const { data, isError, isLoading, isSuccess,refetch } = useGetAllTodosQuery(undefined,{
        /* refetchOnFocus:true,*/
    });
    //throw new Error('Something bad happen');
    let str;
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
    if(isSuccess) {
        return (<div>
            <h1>{str.toUpperCase()}</h1>
            Count is {data.length}
        </div>);
    }
}