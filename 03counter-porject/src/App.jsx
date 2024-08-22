import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter === 30) {
      alert("Counter cannot go above 30!");
      return;
    }
    setCounter(counter + 1);
    // console.log("Counter value after increment: ", counter);
  };

  const removeValue = () => {
    if (counter === 0) {
      alert("Counter cannot go below 0!");
      return;
    }
    setCounter(counter - 1);
    // console.log("Counter value after decrement: ", counter);
  };

  const resetCounter = () => {
    setCounter(15);
    // console.log("Counter value reset to 20: ", counter);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Start now!</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <br />
      <button onClick={resetCounter}>Reset Value</button>
    </>
  );
}

export default App;
