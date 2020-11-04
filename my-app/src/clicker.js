import React from 'react';
import './clicker.css';

class Clicker extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(prevState => {
           return {
               count: prevState.count + 1
           }
       })
  }

  render(){
    return(
      <div>
        <button id="button1" onClick={this.handleClick}>Click me</button>
        <p id="amount">{this.state.count}</p>
      </div>
    )
  }
};

export default Clicker;
export var count;


//function handleClick() {
//    document.getElementById('hoi').innerHTML = counter
//}
