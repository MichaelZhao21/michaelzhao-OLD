import React from 'react';
import './Main.css';

class Main extends React.Component {
	render() {
		return (
			<div>
				Hello {this.props.name}
			</div>
		)
	}
}

export default Main;