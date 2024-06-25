import {useEffect} from "react";

export default function withLogger(Element)
{
    return (props)=>{
        useEffect(()=>{
            console.log('Render by withlogger ',props)
        });
        return <Element {...props}/>
    }
}