'use client';
import {Review} from "@/lib/features/review/reviewApi";
import styles from './review.module.css';
import { useState } from 'react'
import { Rating as ReactRating } from '@smastrom/react-rating'
export default function ReviewUI({review}:{review:Review})
{
    //const [rating, setRating] = useState(0);
    return (<div className={styles['review-container']}>
        <div><ReactRating style={{ maxWidth: 100 }} value={review.rating}  /></div>
        <div>Review {review.review}</div>
    </div>);
}