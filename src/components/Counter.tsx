import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementar = (numero: number) => {
    setCounter(counter + numero);
  };
  return (
    <div className="mt-5">
      <h2>Counter</h2>
      <p> {counter}</p>
      <button
        className="btn btn-success"
        onClick={() => {
          incrementar(1);
        }}
      >
        + 1
      </button>
      &nbsp;
      <button
        className="btn btn-success"
        onClick={() => {
          incrementar(2);
        }}
      >
        + 2
      </button>
    </div>
  );
};
