import {useState} from "react";
import {FancyCounter} from "./SamePositionRender";
import Counter from "../Counter";

export default function SameRoot()
{
    const [isFancy, setIsFancy] = useState(false);
    return (
        <div>
            {isFancy ? (
                <div>
                    <FancyCounter isFancy={true} />
                </div>

            ) : (
                <div>
                    <FancyCounter isFancy={false} />
                    <Counter/>
                </div>

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