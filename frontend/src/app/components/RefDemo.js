import {useReducer, useRef, useState} from "react";
//let counter = 0;
export default function RefDemo()
{
    const [state,setState]= useState(new Date());
    let ref = useRef(0);
    const btnIncHandler= ()=>{
        ref.current++;
        console.log('Counter ',ref.current);
    };
    const btnReRenderHandler =()=>{
        setState(new Date());
    }
    console.log('Render');
    return (<div>
        Counter {ref.current}
        &nbsp;
        <button type={"button"} onClick={btnIncHandler}>Inc</button>
        <button type={"button"} onClick={btnReRenderHandler}>Re-Render</button>
    </div>);
}