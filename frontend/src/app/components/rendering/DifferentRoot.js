import {useState} from "react";
import {FancyCounter} from "./SamePositionRender";

export default function DifferentRoot()
{
    const [isFancy, setIsFancy] = useState(false);
    return (
        <div>
            {isFancy ? (
                <div>

                    <FancyCounter isFancy={true} />
                </div>

            ) : (
                <span>
                    <FancyCounter isFancy={false} />
                </span>

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