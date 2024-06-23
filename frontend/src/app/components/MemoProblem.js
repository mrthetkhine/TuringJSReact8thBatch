import {memo, useCallback, useState} from "react";

function Child({message,callback})
{
    console.log('Render child ',message);
    return (<h1>
        {message}
        <button type={"button"} className={"btn btn-primary"}
                                onClick={callback}> Child Click</button>
    </h1>)
}
Child = memo(Child);
/*const callBack = ()=>{
    console.log('Callback');
};*/
export default function MemoProblem()
{
    const [state,setState] = useState(new Date());
    console.log('Parent MemoProblem render');
    const btnUpdateHandler =()=>{
      setState(new Date());
    };
    const callBack = useCallback(()=>{
        console.log('Callback');
    },[]);
    return (<div>
        Memo problem current time {state.toString()}
        <button type={"button"} onClick={btnUpdateHandler}
                                className={"btn btn-primary"}>Update</button>
        <Child message={"Hello"} callback={callBack}/>
    </div>);
}