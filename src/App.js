import React, { Component } from 'react';
import './App.css';
import Spot from './Spot';


class App extends Component {
  render() {
    var dots= [];
    var dotsx =[];
    var randomColor;

    for (var j=0 ; j < 3 ; j++) {
      for (var i=0 ; i < 3 ; i++) {

        randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
        dots.push(<Spot fill={ randomColor } />);
        dotsx.push(<div className="dots"> {dots} </div>);

  }
}
  return (
    <div>
    {dotsx}
    </div>
    );
  }
}

export default App;
