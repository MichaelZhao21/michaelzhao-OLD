import React from 'react';
import './Main.scss';

import Container from 'react-bootstrap/Container';

import { withRouter } from 'react-router-dom';

class Main extends React.Component {
	handleClick = () => {
		this.props.history.push("/about");
	}

	render() {
		return (
			<Container className="custom-container main" fluid>
				<h1 className="display-1 main-greeting">Hi! I'm Michael :)</h1>
			</Container>
		)
	}
}

export default withRouter(Main);