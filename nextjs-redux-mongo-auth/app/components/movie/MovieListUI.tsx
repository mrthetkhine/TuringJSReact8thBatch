//'use client';
import {Movie} from "@/lib/features/movies/movieApi";
import MovieUI from "@/app/components/movie/MovieUI";

export default function MovieListUI({ movies }: {  movies: Movie[]  })
{
    //console.log('Props ',movies);
    return (<div>
        {
            movies.map(movie=><MovieUI movie={movie} key={movie._id}/>)
        }
    </div>);
}