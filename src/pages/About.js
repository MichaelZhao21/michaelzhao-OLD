import React from 'react';
import './About.scss';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

class About extends React.Component {
	render() {
		return (
			<Container className="custom-container" fluid>
				<h1 className="display-1 about-title">About Me!</h1>
				<Jumbotron className="intro">
					<p>Hey! My name is Michael Zhao and I am cool hehe :DD</p>
				</Jumbotron>
			</Container>
		)
	}
}

export default About;