"use client"
import {useGetAllTodosQuery} from "@/lib/features/todo/todosApiSlice";
import {useGetAllMoviesQuery} from "@/lib/features/movies/movieApi";

export default function MovieList()
{
    const { data, isError, isLoading, isSuccess,refetch } = useGetAllMoviesQuery(undefined,{
        /* refetchOnFocus:true,*/
    });
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
            Movie Count is {data.length}
        </div>);
    }

}