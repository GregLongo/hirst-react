import React, { Component } from 'react';

class Moose extends Component {

	  render() {
	    return (
				<svg height="100" width="100">
				  <circle cx="50" cy="50" r="40" fill={this.props.fill} />
				</svg>
	    );
	  }
	}

	export default Moose;
