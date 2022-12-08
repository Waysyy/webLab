import React from 'react';
import ReactDOM from 'react-dom/client';
import Info from './Info';

function Person()
{
  return(<div>
    <Info name="Beyonce" link = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" phone="+123 456 789" mail="b@beyonce.com" />
  <Info name="Jack Bauer" link = "https://upload.wikimedia.org/wikipedia/en/b/b9/Jack_Bauer.jpg" phone="+987 654 321" mail="jack@nowhere.com" />
  <Info name="Chuck Norris" link = "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" phone="+918 372 574" mail="gmail@chucknorris.com" />
  </div>);
}

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Person />
);