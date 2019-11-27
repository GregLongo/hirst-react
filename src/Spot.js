import React, { Component } from 'react';

class Spot extends Component {

	  render() {
	    return (
	    	<div>
				<svg height="8vh" width="8vw">
				  <circle cx="3vh" cy="3vw" r="2vh" fill={this.props.fill} />
				</svg>
	    	</div>
	    );
	  }
	}

	export default Spot;
