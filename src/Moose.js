import React, { Component } from 'react';

class Moose extends Component {

	static myColor = { fill: "red" };
	
	  render() {
	    return (
	    	<div>
				<svg height="100" width="100">
				  <circle cx="50" cy="50" r="40" fill={this.props.fill} />
				</svg>
	    	</div>
	    );
	  }
	}

	export default Moose;
