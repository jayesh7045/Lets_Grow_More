import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("UpperCase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("No change");
        setText(event.target.value);
    }
    const handleloClick = (event)=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleit = ()=>{
        let newText = '';
        setText(newText);
    }
    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handlePaste = ()=>{
        let a = navigator.clipboard.readText();
        setText(a);
        // setText(event.target.value);
    }
    
  const [text, setText] = useState('Enter text here'); // state variable
//   text = "new text here" --- > This is the wrong way to change the text present in text variable
  return (
    <>
    <div className="container mb-3"> 
        <h1 style = {{color: props.mode === 'light' ? 'black' : 'white'}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value = {text} onChange = {handleOnChange} style = {{backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white'}}></textarea>
        </div>
        <button className="btn btn-primary mx-4" onClick = {handleUpClick} >Convert to UpperCase</button>
        <button className="btn btn-primary mx-4" onClick = {handleloClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-4" onClick = {handleit}>Clear Text</button>
        <button className="btn btn-primary mx-4" onClick = {handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-4" onClick = {handlePaste}>Paste Text</button>
    </div>
    <div className="container my-2" style = {{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h1>
            You text Summary
        </h1>
        <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> charecters</p>
        <p >Time required to read the words are <b>{text.split(" ").length * 0.008}</b></p>
    </div>
    <h2 style = {{color: props.mode === 'light' ? 'black' : 'white'}}>preview</h2>
      <p style = {{color: props.mode === 'light' ? 'black' : 'white'}}>{text}</p>
    </>
  )
}