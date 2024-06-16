import {useRef} from "react";
import DatePicker from "./ref/DatePicker";

export default function FocusInput()
{
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }
    console.log('DOM ref ',inputRef.current);
    return (<div>
        Focus input
        <input ref={inputRef} />
        <button onClick={handleClick}>
            Focus the input
        </button>
        <DatePicker/>
    </div>);
}