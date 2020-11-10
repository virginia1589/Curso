import React, { useState } from "react";
import "./ItemCounter.css";

export default function ItemCounter() {
  const [counter, setCounter] = useState(0);
  const handleClickAdd = () => {
    setCounter(++counter);
  };
  const handleClickSub = () => {
    if (counter > 0) setCounter(--counter);
  };

  const handleReset = () => {
    setCounter(0);
  };
  return (
    <div className="Container">
      <div className="wrapper">
        <button onClick={handleClickSub}>-</button>
        <div>{counter}</div>
        <button onClick={handleClickAdd}>+</button>
      </div>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
