import { Formik, Form, Field } from 'formik';
import {Button, Modal,Form as BForm} from "react-bootstrap";
import * as Yup from "yup";

import styles from './movie.module.css';
import {Director, Movie, useAddMovieMutation, useUpdateMovieMutation} from "@/lib/features/movies/movieApi";
const MovieSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    year: Yup.string()
        .required('Required'),
    name:Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    phoneNo:Yup.string()
        .required('Required'),
});

function createNewMovieJSON(values: any) {
    const director: Partial<Director> = {
        name: values.name,
        phoneNo: values.phoneNo
    }
    const newMovie: Partial<Movie> = {
        title: values.title,
        year: values.year,
        director: director,
    };
    return newMovie;
}

function createUpdateMovieJSON(movieToEdit: Movie, values: any) {
    const movieToUpdate = {
        ...movieToEdit,
        title: values.title,
        year: values.year,
        director: {
            ...movieToEdit.director,
            name: values.name,
            phoneNo: values.phoneNo
        }
    }
    return movieToUpdate;
}

export default function MovieForm({movieToEdit,closeModal}:{
                                movieToEdit:Movie,
                                closeModal:()=>void})
{
    const [addMovieApi,addMovieApiResult] = useAddMovieMutation();
    const [updateMovieApi,updateMovieApiResult] = useUpdateMovieMutation();
    const initValues = {
        title: '',
        year:'',
        name:'',
        phoneNo:''
    }
    if(movieToEdit)
    {
        initValues.title = movieToEdit.title;
        initValues.year= movieToEdit.year+'';
        initValues.name = movieToEdit.director.name;
        initValues.phoneNo = movieToEdit.director.phoneNo;
    }
    const submitHandler = (values:any)=> {
        if (movieToEdit) {

            const movieToUpdate = createUpdateMovieJSON(movieToEdit, values);
            console.log('Update movie ', movieToUpdate);
            updateMovieApi(movieToUpdate)
                .unwrap()
                .then(data=>{
                    console.log('Movie update success ',data);
                    closeModal();
                })

        }
        else
        {
            const newMovie = createNewMovieJSON(values);
            console.log('Save movie ',newMovie);
            addMovieApi(newMovie)
                .unwrap()
                .then(data=> {
                    console.log('Add movie success ',data);
                        closeModal();
                }
                )
            //closeModal();
        }
    };
    return (<div>
        <Formik initialValues={initValues}
                validationSchema={MovieSchema}
                onSubmit={values => {
                    // same shape as initial values
                    submitHandler(values);
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
                        <button type={"submit"} className={"btn btn-primary"}>
                            {movieToEdit?'Update':'Save'}
                        </button>
                    </BForm.Group>
                </Form>
            )}
        </Formik>
    </div>);
}