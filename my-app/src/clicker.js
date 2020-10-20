import React from 'react';
import './clicker.css';

var counter = 0

function handleClick() {
    counter = counter + 1
}

function Clicker(props){
  return(
    <div>
      <button onClick={handleClick}>Click me</button>
      <p></p>
    </div>
  )
};

export default Clicker;
