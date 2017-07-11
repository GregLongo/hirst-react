import React, { Component } from 'react';
import './App.css';
import Moose from './Moose';


class App extends Component {
  render() {
  	var dots= [];
	var randomColor;

  	for (i==; i < 8 ; i++){
  	        
  	        randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

  	        dots.push(<Moose fill={ randomColor } />);
			
			}
    return (
      <div>
      	{dots}
      </div>
    );
  }
}

export default App;
