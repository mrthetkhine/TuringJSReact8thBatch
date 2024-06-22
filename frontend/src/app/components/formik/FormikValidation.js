import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Firstname Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('LastName Required'),
    email: Yup.string().email('Invalid email').required('Email Required'),
});
export default function FormikValidation()
{
    return(<div>
        <h1>Signup</h1>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <div className={"form-group"}>
                        <label>First Name</label>
                        <Field name="firstName" className={"form-control"}/>
                        {errors.firstName && touched.firstName ? (
                            <div className={"alert alert-danger"}>{errors.firstName}</div>
                        ) : null}
                    </div>
                    <div className={"form-group"}>
                        <label>Last Name</label>
                        <Field name="lastName" className={"form-control"} />
                        {errors.lastName && touched.lastName ? (
                            <div className={"alert alert-danger"}>{errors.lastName}</div>
                        ) : null}
                    </div>
                    <div className={"form-group"}>
                        <label>Email</label>
                        <Field name="email" type="email" className={"form-control"} />
                        {errors.email && touched.email ? <div className={"alert alert-danger"}>{errors.email}</div> : null}
                    </div>
                    <button type="submit" className={"btn btn-primary"}>Submit</button>
                </Form>
            )}
        </Formik>
    </div>);
}