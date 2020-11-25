import React from 'react';

class Nieuws extends React.Component {
  constructor(){
    super()
    this.state = {
      headline: 0
    }
    this.headlines = this.headlines.bind(this)
  }

  headlines(){
    var items = [1,2,3,4]
    this.setState(prevState => {
           return {
               headline: items[Math.floor(Math.random()*items.length)]
           }
       })
  }

  render(){
    return(
      <div>
        <p onClick={this.headlines}>{this.state.headline}</p>
      </div>
    )
  }
};

export default Nieuws;
