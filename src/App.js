import React, { Component } from 'react';
import './App.css';
import Moose from './Moose';


class App extends Component {
  render() {
  	var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    return (
      <div>
        <Moose fill={ randomColor } />
      </div>
    );
  }
}

export default App;
