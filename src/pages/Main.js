import React from 'react';
import './Main.css';

class Main extends React.Component {
	render() {
		return (
			<div>
				Hello I'm {this.props.name}
			</div>
		)
	}
}

export default Main;