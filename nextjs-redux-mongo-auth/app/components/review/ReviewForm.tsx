import { Formik, Form, Field } from 'formik';
import {Button, Modal,Form as BForm} from "react-bootstrap";
import * as Yup from "yup";
import { Rating as ReactRating } from '@smastrom/react-rating'

import {Review, useAddReviewMutation, useUpdateReviewMutation} from "@/lib/features/review/reviewApi";
import {useState} from "react";
import {useAddMovieMutation} from "@/lib/features/movies/movieApi";
const ReviewSchema = Yup.object().shape({

    rating: Yup.string()
        .required('Required'),
    review:Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),

});
export default function ReviewForm(
    {
        movieId,
        handleClose,
        reviewToEdit,
    }:
    {   movieId:string,
        handleClose:()=>void,
        reviewToEdit:Review
    })
{
    const [rating, setRating] = useState(reviewToEdit?reviewToEdit.rating:0);
    console.log('Review form');
    const [addReviewApi,addReviewResult] = useAddReviewMutation();
    const [updateReviewApi,updateReviewResult] = useUpdateReviewMutation();
    const initValues = {
        rating:0,
        review :'',
    };
    if(reviewToEdit)
    {
        initValues.review = reviewToEdit.review;
    }

    function addReview(values: any) {
        const json: any = {
            ...values
        }
        json.movie = movieId;
        console.log('Submit ', json);
        addReviewApi(json)
            .unwrap()
            .then(data => {
                console.log('Add Review success ', data);
                handleClose();
            })
    }

    function updateReview(values: any) {
        //update
        const reviewToUpdate: any = {
            ...reviewToEdit
        };
        reviewToUpdate.movie = reviewToEdit.movie._id;
        reviewToUpdate.rating = rating;
        reviewToUpdate.review = values.review;
        console.log('Update Review ', reviewToUpdate);
        updateReviewApi(reviewToUpdate)
            .unwrap()
            .then(data => {
                console.log('Update review success ', data);
                handleClose();
            });
    }

    const submitHandler = (values:any)=> {
        console.log('on submit ',values);
        if(reviewToEdit)
        {
            updateReview(values);
        }
        else
        {
            addReview(values);
        }

    };
    return (<div>
        <Formik initialValues={initValues}
                validationSchema={ReviewSchema}
                onSubmit={values => {
                    // same shape as initial values
                    values.rating = rating;
                    submitHandler(values);
                }}>
            {({ errors, touched }) => (
                <Form>
                    <BForm.Group>

                        <BForm.Label htmlFor="title">Rating</BForm.Label>
                        <ReactRating style={{ maxWidth: 100 }} value={rating} onChange={setRating} />
                    </BForm.Group>
                    <BForm.Group>
                        <BForm.Label htmlFor="year">Review</BForm.Label>
                        <Field
                            type="text"
                            name="review"
                            as={BForm.Control}

                        />

                        {errors.review && touched.review ? (
                            <div className={"alert alert-danger"}> {errors.review}</div>
                        ) : null}

                    </BForm.Group>

                    <BForm.Group>
                        &nbsp;
                        <button type={"submit"} className={"btn btn-primary"}>
                            Save
                        </button>
                    </BForm.Group>
                </Form>
            )}
        </Formik>
    </div>);
}