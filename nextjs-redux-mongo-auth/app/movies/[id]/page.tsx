import MovieDetailsUI from "@/app/components/movie/MovieDetailsUI";
import {Movie} from "@/lib/features/movies/movieApi";
import {Review} from "@/lib/features/review/reviewApi";
import ReviewList from "@/app/components/movie/ReviewList";

const reviews:Review[] = [
    {
        "_id": "66643c5d3bfda65279a2e957",
        "movie": "66643a8e3bfda65279a2e947",
        "rating": 5,
        "review": "Good batman movie",

    },
    {
        "_id": "66643c663bfda65279a2e95a",
        "movie": "66643a8e3bfda65279a2e947",
        "rating": 4,
        "review": "not bad batman movie",

    }
    ];
export default function Page({ params }: { params: { id: string } })
{
    const movie:Movie = {
        "_id": "66643a8e3bfda65279a2e947",
        "title": "Dark Night",
        "director": {
            "name": "Christopher Nolan",
            "phoneNo": "09993",
            "_id": "66643acf3bfda65279a2e94e"
        },
        "year": 2500,

    };
    return (<div>


        <MovieDetailsUI movie={movie}/>
        <ReviewList reviews={reviews}/>
    </div>);
}