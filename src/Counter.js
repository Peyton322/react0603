import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { mul } from "./counterSlice";
import { useState } from "react";
import { add } from "./addSlice";
import { sub } from "./subSlice";
import { div } from "./divSlice";


export function Counter(){
    const count = useSelector((state)=>state.counter.value)
    const count2 = useSelector((state)=>state.add.value2)
    const count3 = useSelector((state)=>state.sub.value3)
    const count4 = useSelector((state)=>state.div.value4)
    const dispatch = useDispatch()
    const [multiplier,setMultiplier] = useState(0)
    const [multiplicand,setMultiplicand] = useState(0)
    const [multiplicand2,setMultiplicand2] = useState(0)

    const [addend,setAddend] = useState(0)
    const [summand,setSummand] = useState(0)

    const [subend,setSubend] = useState(0)
    const [suband,setSuband] = useState(0)

    const [divend,setDivend] = useState(0)
    const [divand,setDivand] = useState(0)
    return(
        <div>
          <div>
            <br/>
            <input
             value={multiplier}
             onChange={e=>setMultiplier(e.target.value)}>
            </input>
            X
            <input
             value={multiplicand}
             onChange={e=>setMultiplicand(e.target.value)}>
            </input>
            X
            <input
             value={multiplicand2}
             onChange={e=>setMultiplicand2(e.target.value)}>
            </input>
            = {count} 
            <button
             onClick={()=>
             dispatch(mul({"multiplier":multiplier,"multiplicand":multiplicand,"multiplicand2":multiplicand2}))}>
            Count
            </button>
          </div>
          <br/>

          <div>
          <input
             value={addend}
             onChange={e=>setAddend(e.target.value)}>
            </input>
            +
            <input
             value={summand}
             onChange={e=>setSummand(e.target.value)}>
            </input>
            = {count2}
            <button
             onClick={()=>
             dispatch(add({"addend":addend,"summand":summand}))}>
            Count
            </button>
          </div>
          <br/>

          <div>
          <input
             value={subend}
             onChange={e=>setSubend(e.target.value)}>
            </input>
            -
            <input
             value={suband}
             onChange={e=>setSuband(e.target.value)}>
            </input>
            = {count3}
            <button
             onClick={()=>
             dispatch(sub({"subend":subend,"suband":suband}))}>
            Count
            </button>

          </div>
          <br/>
          
          <div>
          <input
             value={divend}
             onChange={e=>setDivend(e.target.value)}>
            </input>
            /
            <input
             value={divand}
             onChange={e=>setDivand(e.target.value)}>
            </input>
            = {count4}
            <button
             onClick={()=>
             dispatch(div({"divend":divend,"divand":divand}))}>
            Count
            </button>
          </div>

        </div>
        
    )
}