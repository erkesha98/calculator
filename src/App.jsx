import React, { useState } from "react";
import "./app.css"
const App = () => {
  const [result, setresult] = useState("");
  const onclickHandler=(e)=>{
    setresult(result.concat(e.target.name));

  }
  const clear=()=>{
    setresult("")

  }
  const backspace=()=>{
    setresult(result.slice(0,result.length-1))

  }
  const calculate=()=>{
  try {
    setresult(eval(result).toString())
  } catch (error) {
  setresult("Error")
    
  }

  }
  return (
    <>
      <div className="container">
        <form action="calculator">
          <input type="text" value={result} />
        </form>
        <div className="keypad">
          <button className="highlight"  onClick={clear} id="clear">Clear</button>
          <button className="highlight" onClick={backspace} id="backspace">C</button>
          <button className="highlight" name="/" onClick={onclickHandler}>&divide;</button>
          <button name="7" onClick={onclickHandler}>7</button>
          <button name="8" onClick={onclickHandler}>8</button>
          <button name="9" onClick={onclickHandler}>9</button>
          <button className="highlight" name="*" onClick={onclickHandler}>&times;</button>
          <button name="4" onClick={onclickHandler}>4</button>
          <button name="5" onClick={onclickHandler}>5</button>
          <button name="6" onClick={onclickHandler}>6</button>
          <button className="highlight" name="-" onClick={onclickHandler}>&ndash;</button>
          <button name="1" onClick={onclickHandler}>1</button>
          <button name="2" onClick={onclickHandler}>2</button>
          <button name="3" onClick={onclickHandler}>3</button>
          <button className="highlight" name="+" onClick={onclickHandler}>+</button>
          <button name="0" onClick={onclickHandler}>0</button>
          <button name="." onClick={onclickHandler}>.</button>
          <button className="highlight" id="result"onClick={calculate}>=</button>
        
        </div>
      </div>
    </>
  );
};

export default App;
