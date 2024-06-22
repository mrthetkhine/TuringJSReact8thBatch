import CustomFormik from "./CustomFormik";
import CustomField from "./CustomField";

export default function CustomFormikDemo()
{
    let values = {
        firstName: 'James',
        lastName: 'Bond',
        email: '',
    };
    const onSubmit =(values)=>{
        console.log('form submit ',values);
    };
    return (<div>
        <CustomFormik initialValues={values} onSubmit={onSubmit}>

            <label>FirstName</label>
            <CustomField  name="firstName" className={"form-input"}></CustomField>
            <label>Second Name</label>
            <CustomField  name="lastName" className={"form-input"}></CustomField>
            <label>Email</label>
            <CustomField  name="email" className={"form-input"}></CustomField>
            <button className={"btn btn-primary"}>Submit</button>
        </CustomFormik>
    </div>);
}