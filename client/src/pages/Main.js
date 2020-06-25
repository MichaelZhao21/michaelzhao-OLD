import React from 'react';
import './Main.scss';

import { withRouter } from 'react-router-dom';

class Main extends React.Component {
	handleClick = () => {
		this.props.history.push("/about");
	}

	render() {
		return (
			<div className="custom-container main" fluid>
				<h1 className="display-1 main-greeting" onClick={this.handleClick}>Hi! I'm Michael :)</h1>
			</div>
		)
	}
}

export default withRouter(Main);