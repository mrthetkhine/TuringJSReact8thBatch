import RenderCounter from "./RenderCounter";
import {useState} from "react";

export default function RenderDemo()
{
    const [showB, setShowB] = useState(true);
    return(<div>
        <RenderCounter>

        </RenderCounter>
        {showB && <RenderCounter />}
        <label>
            <input
                type="checkbox"
                checked={showB}
                onChange={e => {
                    setShowB(e.target.checked)
                }}
            />
            Render the second counter
        </label>
    </div>);

}