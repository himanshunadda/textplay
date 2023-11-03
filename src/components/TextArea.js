import React from 'react'
import { useState } from 'react';

export default function TextArea(props) {
  const[text,setText] = useState("");
  const[includeSpaces,setIncludeSpaces] = useState("false");
  const handleChange = (event)=>{
     setText(event.target.value);
     console.log(text);
  }

  const handleUpCase = ()=>{
    let newText = text.toUpperCase();
    console.log(newText);
    setText(newText);
    console.log("new text"+text)
  }

  const handleLowCase = ()=>{
    setText(text.toLowerCase());
  }

  const handleExtraSpaces = ()=>{
    setText(text.replace(/\s+/g, ' '));
  }

  const handleClear = ()=>{
    setText("");
  }
  const handleIncludeSpaces = ()=>{
    if(includeSpaces === false){
      setIncludeSpaces(true);
      console.log(includeSpaces);
    }else{
      setIncludeSpaces(false);
      console.log(includeSpaces);
    }
  }
  return (
    <div>

      <div className="w-75 mb-3 mx-5 my-5 d-flex flex-column justify-content-center align-items-center">
            <div className="container d-flex">
            <label htmlFor="exampleFormControlTextarea1" className="form-label"><h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Example textarea</h2></label>
            </div>
            <textarea className={`form-control custom-border bg-${props.mode === 'light' ? 'light' : 'dark'} text-${props.mode === 'light' ? 'dark' : 'light'}`} onChange={handleChange} value = {text}id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <div className="buttons d-flex mx-5">
      <button disabled = {text.length === 0}  type="button" className="btn btn-primary mx-1" onClick={handleUpCase}>Convert To UpperCase</button>
      <button disabled = {text.length ===0} type="button" className="btn btn-primary mx-1" onClick={handleLowCase}>Convert To LowerCase</button>
      <button disabled = {text.length ===0} type="button" className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button disabled = {text.length ===0} type="button" className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
      
    </div>
    <div className="includeSpaces d-flex mx-5 my-4">
    <div className="form-check form-switch">
        <input className="form-check-input" disabled = {text.length === 0} type="checkbox" onClick={handleIncludeSpaces} id="flexSwitchCheckDefault"/>
        <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault" >Include 
            spaces</label>
</div>
    </div>
    <div className={`text-summary mx-5 my-5 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
      <h2>
        Summary
      </h2>
      <p>
        <strong>{text.length === 0 ? '0' : text.trim().split(" ").length}</strong> words and <strong>{includeSpaces === false ? text.split(" ").join("").length : text.trim().length }</strong> alphabets
      </p>
      <p>
      <strong>{text.length === 0 ? '0 ' : (0.00416667*text.split(" ").length).toFixed(3) + " "} </strong> minutes read
      </p>
      
    </div>

    <div className={`preview  mx-5 my-5 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
      <h2>
        Preview
      </h2>
      <p>
        {text}
      </p>
    </div>

    </div>
  )
}
