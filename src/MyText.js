import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { updateText } from "./MyTextSlice";

export function MyText(){
    const text = useSelector((state)=>state.text.value)
    
    const dispatch = useDispatch()

    return(
        <div>
            <div>
                <input
                 aria-label="Set text"
                 value={text}
                 onChange={e=>(dispatch(updateText(String(e.target.value))))}>
                </input>
                <h1>
                    {text}
                </h1>
            </div>
        </div>
    )
}