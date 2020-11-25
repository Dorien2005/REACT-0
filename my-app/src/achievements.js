import React from 'react';
import './achievements.css';

function handleHover(){
  document.getElementById('a1').style.backgroundColor = "white";
  document.getElementById('a1').style.borderColor = "black";
  document.getElementById('a1').style.color = "black";
}

function Achievements(){
  return(
    <div>
      <p class="achievement" id='a1' onMouseOver={handleHover}>1</p>
      <p class="achievement" id="a2">2</p>
      <p class="achievement" id="a3">3</p>
      <p class="achievement" id="a4">4</p>
      <p class="achievement" id="a5">5</p>
      <p class="achievement" id="a6">6</p>
      <p class="achievement" id="a7">7</p>
    </div>
  )
}

export default Achievements



//
