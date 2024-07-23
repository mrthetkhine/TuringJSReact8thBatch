'use client';
import {Movie, useGetAllMoviesQuery} from "@/lib/features/movies/movieApi";
import MovieUI from "@/app/components/movie/MovieUI";

export default function MovieListUI()
{

    const { data, isError, isLoading, isSuccess,refetch } = useGetAllMoviesQuery();
    if(isLoading)
    {
        return (<h1>Loading..</h1>);
    }
    else if(data)
    {
        return (<div>
            {
                data.map(movie=><MovieUI movie={movie} key={movie._id}/>)
            }
        </div>);
    }

}