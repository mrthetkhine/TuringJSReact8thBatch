import {Review} from "@/lib/features/review/reviewApi";
import styles from './review.module.css';
export default function ReviewUI({review}:{review:Review})
{
    return (<div className={styles['review-container']}>
        <div>Rating {review.rating}</div>
        <div>Review {review.rating}</div>
    </div>);
}