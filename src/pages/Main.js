import React from 'react';
import './Main.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { ReactComponent as Name } from './name.svg';
import { withRouter } from 'react-router-dom';

class Main extends React.Component {
	handleClick = () => {
		this.props.history.push("/about");
	}

	render() {
		return (
			<Container fluid>
				<Row>
					<div className="main-content">
						<Name className="name" onClick={this.handleClick} />
					</div>
				</Row>
			</Container>
		)
	}
}

export default withRouter(Main);