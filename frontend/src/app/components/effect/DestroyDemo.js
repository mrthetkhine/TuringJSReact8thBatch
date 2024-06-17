import CleanUpDemo from "./CleanupDemo";
import {useState} from "react";

export default function DestroyDemo()
{
    const [show,setShow] = useState(false);
    const btnToggle = ()=>{
      setShow(!show);

    };
    return(<div>
        Destroy component
        {
            show && <CleanUpDemo/>
        }
        <button type={"button"} onClick={btnToggle}>Toggle</button>
    </div>);
}