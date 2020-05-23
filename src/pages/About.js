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
					<p>Hey! My name is Michael Zhao and I am cool hehe :DD Hi guys! My name’s Michael Zhao and I’ll be one of two amazing Elm Fork 2020-21 Committee Heads! I love talking to people, coding random games, cooking for my friends, painting and sketching during my free time, and learning dances (esp kpop hehe)! In addition to Elm Fork, I am also the secretary for CSO, the president of TCS (yum!), and the TAS CS committee head (ik I’m a nerd lol). Don’t be afraid to come ask me literally anything in the world; I love meeting and talking to new people :)) I’m super excited to be committee head for Elm Fork this year, and I look forward to working with all of you!</p>
				</Jumbotron>
			</Container>
		)
	}
}

export default About;