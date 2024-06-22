import CustomField from "./CustomField";
import {useState} from "react";


export default function CustomFormik({initialValues,children,onSubmit})
{
    console.log('Form values ',initialValues);

    const [values,setValues] = useState(initialValues);
    const onChangeHandler = (e)=>{
        console.log('OnChange ',e);
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }
    const onSubmitHandler= (e)=>{
        onSubmit(values);
        e.preventDefault();
    }
    console.log('Children ',typeof children);
    if(typeof children==='object')
    {
        return (<form onSubmit={onSubmitHandler}>
            {children.map(child=>{
                console.log('Child ',child.type === CustomField);
                if(child.type==CustomField)
                {
                    return <input {...child.props}
                                  value={values[child.props.name]}
                                  onChange={onChangeHandler} />;
                }
                else
                {
                    return child;
                }

            })}
        </form>);
    }
    else {
        //TO DO
        const childComponents =children({values:initialValues});
        return (<form onSubmit={onSubmitHandler}>
            {childComponents}
            </form>);
    }

}