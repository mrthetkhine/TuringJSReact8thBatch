import MovieListUI from "@/app/components/movie/MovieListUI";
import {Movie} from "@/lib/features/movies/movieApi";
import NewMovieInput from "@/app/components/movie/NewMovieInput";

const movies:Movie[] =[
    {
        "_id": "66643a8e3bfda65279a2e947",
        "title": "Dark Night",
        "director": {
            "name": "Christopher Nolan",
            "phoneNo": "09993",
            "_id": "66643acf3bfda65279a2e94e"
        },
        "year": 2500,
        "__v": 0
    },
    {
        "_id": "66643a9e3bfda65279a2e94a",
        "title": "Avatar 1",
        "director": {
            "name": "Jame Cameron",
            "phoneNo": "09993",
            "_id": "66643a9e3bfda65279a2e94b"
        },
        "year": 2020,
        "__v": 0
    }
];
export default function Page()
{

    return(<div>
        <NewMovieInput/>
        <MovieListUI movies={movies}/>
    </div>);
}