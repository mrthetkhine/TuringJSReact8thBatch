import {useRef, useState} from "react";

export default function ConflictDemo()
{
    const [counter,setCounter] = useState(0);
    let ref = useRef(null);
    const btnHandler = ()=>{
        console.log("Handler ",ref.current);
        ref.current.innerText  = "Hello 2";
    };

    const incHandler=()=>{
        setCounter(counter+1)
    }
    console.log('Render');
    return (<div>
        Problem
        <span ref={ref}>Hello {counter}</span>

        <div>
            <button type={"button"} onClick={btnHandler} className={"btn btn-primary"}>Click</button>
            <button type={"button"} onClick={incHandler} className={"btn btn-primary"}>Update VDOM</button>
        </div>
    </div>);
}