import {useState} from "react";
import Greeting from "./Greeting";

export default function Counter()
{
    /*let counter = 0;
   ;*/
    const [counter,setCounter] = useState(0);
    const [another,setAnother] = useState(new Date());
    const incCounter=()=>{
        console.log('Counter ',counter);
        setCounter(counter+1);

    }
    const changeDate =()=>{
        console.log('Counter ',counter);
        setAnother(new Date());

    }
    console.log('Render');
    let localMessage= new Date().toString();
    const changeLocalDate =()=>{

        localMessage= new Date().toString();

    }
    return(<div>
        Counter is {counter}
        &nbsp;
        <button type={"button"} onClick={incCounter}>+</button>
        &nbsp;
        <button type={"button"} onClick={changeDate}>Update date</button>
        &nbsp;
        <div></div>
        <button type={"button"} onClick={changeLocalDate}>Update date</button>
        &nbsp;
        <Greeting name={localMessage}/>
    </div>)
}