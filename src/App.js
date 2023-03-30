// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, { useState } from 'react'
// import Alert from './Components/Alert';
function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null)
  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg : message,
  //     type:type
  //   })
  // }
  const toggleit=()=>{
    if(mode === "light")
    {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      {/* <Navbar title = "hi" aboutus="king"/> */}
      <Navbar title = "TextUtils" mode={mode} toggleit = {toggleit}/>
      {/* <Alert alert = {alert}/> */}
      <div className="container my-3" >
        <h3 style = {{color: mode === 'light' ? 'black' : 'white'}}>Example Text Area</h3>
      <br></br>
      <br></br>
        <TextForm heading="Enter the text to analyze" mode = {mode}/>
      </div>
      </>
  );
}

export default App;
