import {useEffect, useState} from "react";

export default function EffectDemo()
{
    const [counter,setCounter] = useState(1);
    const [secondCounter,setSecondCounter] = useState(1);
    useEffect(()=>{
        console.log('useEffect empty dependency fired');
    },[]);

    useEffect(()=>{
        console.log(' useEffect with no dependency fired');
    });
    useEffect(()=>{
        console.log('secondCounter changed');
    },[secondCounter]);
    const btnIncHandler = ()=>{
        setCounter(counter+1);
    }
    const btnSecondCounterIncHandler = ()=>{
        setSecondCounter(secondCounter+1);
    }
    console.log('Render');
    return (<div>
        Effect Counter {counter}
        <button type={"button"} onClick={btnIncHandler}>Inc</button>

        <div>
            Second Counter {secondCounter}
            <button type={"button"} onClick={btnSecondCounterIncHandler}>Inc</button>
        </div>
    </div>);
}