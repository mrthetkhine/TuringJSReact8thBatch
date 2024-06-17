"use client";
import $ from 'jquery';
import datepickerFactory from 'jquery-datepicker';
import {useEffect, useRef} from "react";

datepickerFactory($);
//datepickerJAFactory($);
export default function DatePicker()
{
    let datepicker = useRef(null);
    useEffect(()=>{
        console.log("Initialized ",datepicker.current);
        $(datepicker.current).datepicker();
        return ()=>{
            $(datepicker.current).datepicker('destroy');
        }
    },[]);
    console.log("Render");
    return(<div>
        <input type={"text"} ref={datepicker}/>
    </div>)
}