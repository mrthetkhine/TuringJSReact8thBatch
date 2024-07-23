import { Formik, Form, Field } from 'formik';
import {Button, Modal,Form as BForm} from "react-bootstrap";
import * as Yup from "yup";
import { Rating as ReactRating } from '@smastrom/react-rating'

import {Review} from "@/lib/features/review/reviewApi";
import {useState} from "react";
const ReviewSchema = Yup.object().shape({

    rating: Yup.string()
        .required('Required'),
    review:Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),

});
export default function ReviewForm()
{
    const [rating, setRating] = useState(0);
    const initValues = {
        rating: '0',
        review :'',
    };
    const submitHandler = (values:any)=> {
        console.log('Submit ',values);
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