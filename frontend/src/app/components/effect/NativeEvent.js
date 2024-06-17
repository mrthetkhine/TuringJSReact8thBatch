import {useEffect} from "react";

export default function NativeEvent()
{
    useEffect(() => {
        function handleClick(e) {
            console.log(e);
        }
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);
    return (<div>
        Native Event
    </div>);
}