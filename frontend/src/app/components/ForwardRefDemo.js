import {forwardRef, useRef} from "react";

const MyInput = forwardRef(function MyInput(props, ref) {
    return (
        <label>
            {props.label}
            <input ref={ref} />
        </label>
    );
});

export default function ForwardRefDemo()
{
    const ref = useRef(null);

    function handleClick() {
        ref.current.focus();
        console.log('Width ',ref.current.offsetWidth);
    }

    return (
        <form>
            <MyInput label="Enter your name:" ref={ref} />
            <button type="button" onClick={handleClick}>
                Edit
            </button>
        </form>
    );
}