import {useState} from "react";
import Counter from "../Counter";
import RenderCounter from "./RenderCounter";

let id =3;
export default function ChildList()
{
    const [items,setItems] = useState([1,2]);
    const btnAddHandler =()=>{
        setItems([...items,id++]);
    }
    const btnReverseHandler=()=>{

        const reverse = items.reverse();
        console.log('Reverse ',reverse);
        setItems([...reverse]);
    }
    return (<div>
        {/*{items.map((item,index)=><RenderCounter key={index} data={item}></RenderCounter>)}*/}
        {items.map((item,index)=><RenderCounter key={item} data={item}></RenderCounter>)}
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnAddHandler}
        >Add</button>

        <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnReverseHandler}>Reverse</button>
    </div>);
}