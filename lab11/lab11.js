const name = 'Иван-Царевич';
const element = <h1>Здравствуй, {name}!</h1>;
 
ReactDOM.render(
  element,
  document.getElementById('root')
);


import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, triplePi } from "./math.js";
 
ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
