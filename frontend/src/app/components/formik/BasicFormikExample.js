import { Formik, Field, Form } from 'formik';
export default function BasicFormikExample()
{
    return(<div>
        <h1>Sign Up</h1>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
            }}
            onSubmit={async (values) => {
                console.log('formSubmit ',values);
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >
            <Form>
                <div className={"form-group"}>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" placeholder="Jane"
                           className={"form-control"}/>
                </div>
                <div className={"form-group"}>

                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName"
                           placeholder="Doe"
                           className={"form-control"}/>
                </div>
                <div className={"form-group"}>
                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                        className={"form-control"}
                    />
                </div>
                <button type="submit" className={"btn btn-primary"}>Submit</button>
            </Form>
        </Formik>
    </div>);
}