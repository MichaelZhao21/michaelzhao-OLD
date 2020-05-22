import React from 'react';
import './Main.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import {ReactComponent as Name} from './name.svg';

class Main extends React.Component {
	render() {
		return (
			<Container fluid>
				<Row>
					<div className="main-content">
						<Name className="name" />
					</div>
				</Row>
			</Container>
		)
	}
}

export default Main;