import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import {pi} from "./components/Math.js";
import  { doublePi, triplePi } from "./components/Math.js";
import GoodTime from './components/GoodTime';
// 1 //

function List (){
  const numbers = ["Суши", "Чипсеки","Сухареки","Шаурма", "Рамен", "Вок", "Пицца"];
  const listItems = numbers.map((number) =>
  <li>{number}</li>
  );
return (<div>
  <h2>Моя любимая еда</h2>
  <ul>{listItems}</ul>
  </div>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <List />
  );
// 2 //
  const name = 'Человек';
  const digit = 7;

  function Happy ()
  {return(
    <div>
    <h2>Привет, {name}!</h2>
    <a>Твое счастливое число, {digit}!</a>
    </div>);
  }

  const ex2 = ReactDOM.createRoot(document.getElementById("ex2"));
  ex2.render(
  <Happy />
  );

// 3 //
const divStyle = {
  color: 'red'
};

function ColorHead () {
  return (<div style={divStyle}>
    <h2>Цветной заголовок</h2>
    </div>);
}

const ex3 = ReactDOM.createRoot(document.getElementById("ex3"));
  ex3.render(
  <ColorHead />
  );

//4//

const ex4 = ReactDOM.createRoot(document.getElementById('ex4'));
ex4.render(
    <App />
);


//5//
const ex5 = ReactDOM.createRoot(document.getElementById('ex5'));
ex5.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("ex5")
);

//6//
const ex6 = ReactDOM.createRoot(document.getElementById('ex6'));
ex6.render(
    <GoodTime />
);