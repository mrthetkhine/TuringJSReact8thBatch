import {useState} from "react";

export default function useCustomReducer(reducer,initialState)
{
    const [data,setData] = useState(initialState);
    function dispatch(action)
    {
        const nextState = reducer(data,action);
        setData(nextState);
    }
    return [data,dispatch];
}