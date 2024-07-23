import {Review} from "@/lib/features/review/reviewApi";
import ReviewUI from "@/app/components/review/ReviewUI";

export default function ReviewList({reviews}:{reviews:Review[]})
{
    return (<div>
        {
            reviews.map(review=><ReviewUI review={review} key={review._id}/>)
        }
    </div>)
}