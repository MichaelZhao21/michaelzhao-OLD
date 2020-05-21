import React from 'react';
import './Main.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
	render() {
		return (
			<Container className="p-3" fluid>
				<Row>
					<div>Main</div>
				</Row>
			</Container>
		)
	}
}

export default Main;