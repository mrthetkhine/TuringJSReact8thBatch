import {useState} from "react";

export default function RenderCounter({data=''})
{
    const [counter,setCounter] = useState(0);
    const btnIncHandler = ()=>{
        setCounter(counter+1);
    }
    return (<div>
        Counter {counter} Data {data}
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnIncHandler}
        >Inc</button>
    </div>)

}