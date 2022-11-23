import React from 'react'
import {render} from 'react-dom'
import App from './components/App'

function List (){
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
return( <ul>{listItems}</ul>)
}

render(
  <List />,
  document.getElementById('root'));
