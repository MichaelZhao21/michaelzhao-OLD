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
					{/* TODO: update text */}
					<p>Hey! My name is Michael Zhao and I am currently attending the <a href="https://tams.unt.edu/">Texas Academy of Mathematics and Science</a>!
					<br/> //TODO: Add more
					</p>
				</Jumbotron>
			</Container>
		)
	}
}

export default About;