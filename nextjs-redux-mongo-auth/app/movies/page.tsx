import MovieListUI from "@/app/components/movie/MovieListUI";
import {Movie} from "@/lib/features/movies/movieApi";
import NewMovieInput from "@/app/components/movie/NewMovieInput";


export default function Page()
{

    return(<div>
        <NewMovieInput/>
        <MovieListUI/>
    </div>);
}