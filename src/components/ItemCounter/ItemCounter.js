import React, { useState } from "react";
import "./ItemCounter.css";

export default function ItemCounter() {
  let [value, setValue] = useState(0);
  const handleClickAdd = () => {
    setValue(++value);
  };
  const handleClickSub = () => {
    if (value > 0) setValue(--value);
  };

  const handleReset = () => {
    setValue(0);
  };
  return (
    <div className="Container">
      <div className="wrapper">
        <button onClick={handleClickSub}>-</button>
        <div>{value}</div>
        <button onClick={handleClickAdd}>+</button>
      </div>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

