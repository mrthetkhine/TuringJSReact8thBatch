import {useState} from "react";
import {FancyCounter} from "./SamePositionRender";

export default function DifferentPosition()
{
    const [isFancy, setIsFancy] = useState(false);
    return (
        <div>
            {isFancy ? (
                <>
                    <h1>Hello</h1>
                    <FancyCounter isFancy={true} />
                </>

            ) : (
                <FancyCounter isFancy={false} />
            )}
            <label>
                <input
                    type="checkbox"
                    checked={isFancy}
                    onChange={e => {
                        setIsFancy(e.target.checked)
                    }}
                />
                Use fancy styling
            </label>
        </div>);
}