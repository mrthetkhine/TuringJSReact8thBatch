import {useState} from "react";
import Greeting from "./Greeting";

export default function CounterTwo()
{
    /*let counter = 0;
   ;*/
    const [counter,setCounter] = useState(0);
    const [another,setAnother] = useState(new Date());
    const incCounter=()=>{
        console.log('Counter ',counter);
        setCounter(counter=>counter+1);
        setCounter(counter=>counter+1);
        setCounter(counter=>counter+1);
        setAnother(new Date());
       /* setTimeout(()=>{
            alert('Counter '+counter);
        },3000);
*/

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

        {/* <Greeting name={localMessage}/>*/}
    </div>)
}