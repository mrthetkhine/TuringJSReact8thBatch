'use client';
import {Review, useAddReviewMutation, useDeleteReviewMutation} from "@/lib/features/review/reviewApi";
import styles from './review.module.css';
import { useState } from 'react'
import { Rating as ReactRating } from '@smastrom/react-rating'
import {Modal} from "react-bootstrap";
import ReviewForm from "@/app/components/review/ReviewForm";
import ConfirmModal from "@/app/components/common/ConfirmModal";
export default function ReviewUI({review}:{review:Review})
{
    console.log('Review UI review model ',review);
    const [deleteReviewApi,deleteReviewResult] = useDeleteReviewMutation();
    const [updateReviewShow, setUpdateReviewShow] = useState(false);
    const handleClose = () => setUpdateReviewShow(false);
    const handleShow = () => setUpdateReviewShow(true);
    //const [rating, setRating] = useState(0);

    const [showConfirm,setShowConfirm] = useState(false);

    const closeConfirm=()=>{
        setShowConfirm(false);
    }
    const btnDeleteHandler = ()=>{
        setShowConfirm(true);
    };
    const handleYes= ()=>{
        console.log('Yes Delete ');
        deleteReviewApi(review)
            .unwrap()
            .then(data=>{
                console.log('Review deleted success ',data);
                closeConfirm();
            });


    };
    const handleNo=()=>{
        console.log('No ');
        closeConfirm();
    };
    return (<div className={styles['review-container']}>
        <div><ReactRating style={{ maxWidth: 100 }} value={review.rating}  /></div>
        <div>Review {review.review}</div>
        <button type={"button"} className={"btn btn-primary"} onClick={handleShow}>Edit</button>
        &nbsp;
        <button type={"button"} className={"btn btn-danger"} onClick={btnDeleteHandler}>Delete</button>


        <ConfirmModal show={showConfirm}
                      handleClose={closeConfirm}
                      render={()=>(<div>
                          <h3>Are you sure you want to delete?</h3>
                          <button type={"button"}
                                  className={"btn btn-danger"}
                                  onClick={handleYes}
                          >Yes</button>
                          <button type={"button"}
                                  className={"btn btn-primary"}
                                  onClick={handleNo}
                          >No</button>
                      </div>)}/>
        <Modal show={updateReviewShow} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ReviewForm reviewToEdit={review}
                            movieId={review.movie}
                            handleClose={handleClose}/>
            </Modal.Body>

        </Modal>
    </div>);
}