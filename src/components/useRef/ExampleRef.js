import React, { useState } from "react";
import "./ref.css";
import { MultipleCustomHooks } from "../examples/MultipleCustomHooks";

export const ExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Ejemplo</h1>
      <hr />
      {show && <MultipleCustomHooks />}
      <button
        className="btn btn-primary mt-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
    </div>
  );
};
