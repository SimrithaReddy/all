import React, {Component, useState} from "react";
// import "../styles/App.css";

function App() {
  const [bool,setData] = useState(false);
 
  return (
    <div id="main">
      <button onClick={()=>{setData(!bool)}}  >Click</button>
    <p>{bool?(<p> Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>):<p></p>}</p>     </div>
  );
}


export default App;