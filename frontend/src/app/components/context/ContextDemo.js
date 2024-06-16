import {ThemeContext} from "./ThemeContext";
import {useContext, useState} from "react";


function Parent()
{
    return (<div>
        Parent
        <Child></Child>
    </div>);
}
function Child()
{
    return(<div>
        Child
        <Child2></Child2>
    </div>);
}
function Child2()
{
    const theme = useContext(ThemeContext);
    return(<div style={theme}>
        Child 2

    </div>);
}
export default function ContextDemo()
{
    const [color,setColor] = useState('blue');

    const updateColor = (color)=>{
        setColor(color);
    }
    return (<div>
        Context Demo
        <button type={"button"} onClick={(event => updateColor('red'))}>Red</button>
        <button type={"button"} onClick={(event => updateColor('green'))}>Green</button>
        <ThemeContext.Provider value={{color:color}}>
            <Parent></Parent>
        </ThemeContext.Provider>

    </div>);
}