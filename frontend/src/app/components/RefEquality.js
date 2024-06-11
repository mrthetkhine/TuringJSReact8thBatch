import {useState} from "react";

export default function RefEquality()
{
    const [data,setData] = useState({
        message: 'Hello'
    });
    const changeHandler = ()=>{
        //data.message = "Change";
        setData({
            message : 'Change'+new Date()
        });
    };
    console.log('Render RefEquality');
    return (<div>
        Message {data.message}

        <button type={"button"} onClick={changeHandler}>Change</button>
    </div>)
}