import React, { Component } from 'react';

class Extra extends Component {
	constructor() {
		super(props)
		this.state = {age:20}
	}
}

render() {
	return (
		<div>
		 <h3>{this.props.name}</h3>
		 <p>Age : {this.state.age}</p>
		</div>
		)
	}
}

expoert default Person