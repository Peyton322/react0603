import React,{useState} from 'react';

export default function InputTexts(){
  const [text,setText] = useState("nothings");
  return(
    <>
    <input type='text' onChange={(e)=>{setText(e.target.value)}}></input>
    <p>{text}</p>
    </>
  );
}