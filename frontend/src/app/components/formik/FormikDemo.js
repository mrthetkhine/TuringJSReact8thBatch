import { Formik, Field, Form } from 'formik';
export default function FormikDemo()
{
    return (<div>
        <div>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log('OnSubmit ',values);
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={"form-group"}>
                            <label>Email</label>
                            <input
                                className={"form-control"}
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                        </div>
                        <div className={"form-group"}>
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                className={"form-control"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && touched.password && errors.password}
                        </div>
                        <button type="submit" disabled={isSubmitting} className={"btn btn-primary"}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    </div>);
}