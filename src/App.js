import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Calculator from "./components/Calculator";

function App() {
  const [display, setDisplay] = useState("");

  const calculate = (calculation) => {
    setDisplay(eval(calculation.replace('÷', '/').replace('x', '*').replace(/[^-()\d/*+.]/g, '')).toString());
  }

  const removeOneCharFromDisplay = () => {
    setDisplay(prevDisplay => prevDisplay.slice(0, prevDisplay.length - 1));
  }

  const changeDisplay = (updatedDisplay) => {
    setDisplay(prevDisplay => prevDisplay + '' + updatedDisplay);
  }
  return (
    <div className="App" style={{ backgroundColor: "darkgrey" }}>
      <Navbar />
      <Calculator display={display} changeDisplay={changeDisplay} removeOneCharFromDisplay={removeOneCharFromDisplay} calculate={calculate} />
    </div>  
  );
}

export default App;
