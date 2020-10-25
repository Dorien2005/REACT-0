import React from 'react';
import './clicker.css';

var counter = 0

function handleClick() {
    counter = counter + 1
    document.getElementById('hoi').innerHTML = counter
}

function Clicker(props){
  return(
    <div>
      <button id="button1" onClick={handleClick}>Click me</button>
      <p id="hoi">{counter}</p>
    </div>
  )
};

export default Clicker;
