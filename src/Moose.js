import React, { Component } from 'react';

class Moose extends Component {

	static myColor = { fill: "red" };

	  render() {
	  	var fill 
	    return (
	    	<div>
				<svg height="100" width="100">
				  <circle cx="50" cy="50" r="40" fill={myColor.props.fill} />
				</svg>
	    	</div>
	    );
	  }
	}

	export default Moose;
