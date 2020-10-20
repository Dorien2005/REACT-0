import React from 'react';

const counter = 0

function handleClick() {
    counter = counter + 1
    document.getElementById("demo").innerHTML = counter;
}

onClick=""
function Clicker(){
  return(
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
};

export default Clicker;
