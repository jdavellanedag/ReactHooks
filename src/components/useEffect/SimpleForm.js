import React, { useEffect, useState } from "react";
import { Message } from "./Message";
import "./effect.css";

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    name: "",
    email: "",
  });

  const { email, name } = formState;

  useEffect(() => {
    //console.log("Carga al inicio");
  }, []);

  useEffect(() => {
    //console.log("Cambia al cambiar formstate");
  }, [formState]);

  useEffect(() => {
    //console.log("Cambia al cambiar email en formstate");
  }, [email]);

  const handleInputChange = ({ target }) => {
    setformState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <h1>useEffect</h1>
      <hr></hr>
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="correo@mail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        ></input>
      </div>
      {name === "123" && <Message />}
    </div>
  );
};
