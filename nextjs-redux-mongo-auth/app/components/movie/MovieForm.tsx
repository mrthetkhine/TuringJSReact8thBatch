import { Formik, Form, Field } from 'formik';
import {Button, Modal,Form as BForm} from "react-bootstrap";
import * as Yup from "yup";

import styles from './movie.module.css';
const MovieSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    year: Yup.string()
        .required('Required'),
    name:Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    phoneNo:Yup.string()
        .required('Required'),
});
export default function MovieForm()
{
    const initValues = {
        title: '',
        year:'',
        name:'',
        phoneNo:'test'
    }
    return (<div>
        <Formik initialValues={initValues}
                validationSchema={MovieSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}>
            {({ errors, touched }) => (
                <Form>
                    <BForm.Group>

                        <BForm.Label htmlFor="title">Title</BForm.Label>
                        <Field
                            type="text"
                            name="title"
                            as={BForm.Control}

                        />

                        {errors.title && touched.title ? (
                            <div className={"alert alert-danger"}> {errors.title}</div>
                        ) : null}
                    </BForm.Group>
                    <BForm.Group>
                        <BForm.Label htmlFor="year">Year</BForm.Label>
                        <Field
                            type="text"
                            name="year"
                            as={BForm.Control}

                        />

                        {errors.year && touched.year ? (
                            <div className={"alert alert-danger"}> {errors.year}</div>
                        ) : null}

                    </BForm.Group>
                    <BForm.Group>
                        <BForm.Label htmlFor="name">Director Name</BForm.Label>
                        <Field
                            type="text"
                            name="name"
                            as={BForm.Control}

                        />

                        {errors.name && touched.name ? (
                            <div className={"alert alert-danger"}> {errors.name}</div>
                        ) : null}

                    </BForm.Group>
                    <BForm.Group>
                        <BForm.Label htmlFor="name">Phone No</BForm.Label>
                        <Field
                            type="text"
                            name="phoneNo"
                            as={BForm.Control}

                        />

                        {errors.phoneNo && touched.phoneNo ? (
                            <div className={"alert alert-danger"}> {errors.phoneNo}</div>
                        ) : null}

                    </BForm.Group>
                    <BForm.Group>
                        &nbsp;
                        <button type={"submit"} className={"btn btn-primary"}>Save</button>
                    </BForm.Group>
                </Form>
            )}
        </Formik>
    </div>);
}