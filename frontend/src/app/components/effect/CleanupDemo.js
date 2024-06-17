import {useEffect, useState} from "react";

export default function CleanUpDemo()
{
    const [counter,setCounter] = useState(1);
    useEffect(()=>{
        console.log("Plugin initialized");
        return ()=>{
            console.log("Plugin destroyed");
        };
    },[]);
    const btnIncHandler = ()=>{
        setCounter(counter+1);
    }
    return(<div>
        Clean up
        Effect Counter {counter}
        <button type={"button"} onClick={btnIncHandler}>Inc</button>
    </div>);
}