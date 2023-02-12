import React, { useState } from "react";


function InputArea(props) {
  const [inputText, setInputText] = useState("");
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  return (
    <div className="form">
      <input onKeyDown={(event)=>{
        if (event.key==="Enter")
        {props.addItem(inputText);
        setInputText("");}
      }} onChange={handleChange} type="text" value={inputText} />
      <button  onClick={()=>{
        props.addItem(inputText);
        setInputText("");
        }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;