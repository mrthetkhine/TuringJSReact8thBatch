import {Review, useGetAllReviewsByMovieIdQuery} from "@/lib/features/review/reviewApi";
import ReviewUI from "@/app/components/review/ReviewUI";
import {useGetAllMoviesQuery} from "@/lib/features/movies/movieApi";

export default function ReviewList({movieId}:{movieId:string})
{
    const { data:reviews, isError, isLoading, isSuccess,refetch } = useGetAllReviewsByMovieIdQuery(movieId);
    if(isLoading)
    {
        return <h3>Loading review...</h3>
    }
    else if(reviews)
    {
        return (<div>
            {
                reviews.map(review=><ReviewUI review={review} key={review._id}/>)
            }
        </div>)
    }

}