import React, { Component } from 'react';
import './App.css';
import Moose from './Moose';


class App extends Component {
  render() {
  	var dots= [];
  	var dotsx =[];
	var randomColor;
  	
	  for (var j=0 ; j < 8 ; j++){
	  	for (var i=0 ; i < 8 ; i++){

	  	        randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

	  	        dots.push(<Moose fill={ randomColor } />);
				
				}
		dotsx.push(dots);

		}

    return (
      <div>
      	{dotsx}
      </div>
    );
  }
}

export default App;
