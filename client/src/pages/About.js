import React from 'react';
import './About.scss';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';

class About extends React.Component {
	render() {
		return (
			<Container className="custom-container" fluid>
				<h1 className="display-1 about-title">About Me!</h1>
				<Jumbotron className="intro">
					<p>Hey! My name is Michael Zhao, and I am going to be a senior at the <a href="https://tams.unt.edu/">Texas Academy of Mathematics and Science</a>! I love making and building things like this website! In addition to web design and programming, I also really like art. I've done a lot of sketching, but recently I've gotten into painting and even painted a mural on my wall (See projects soon). I also enjoy cooking and making all sorts of creative foods from traditional Chinese dishes to an entire roast turkey! I love hanging out with my friends and meeting new people. I'm always free to talk; just hit me up on one of my socials. Love you all! :DDD</p>
				</Jumbotron>
				<div className="socials">
					<ListGroup variant="flush">
						<ListGroup.Item className="lsi">Email: <a href="mailto: michaelzhao314@gmail.com">michaelzhao314@gmail.com</a></ListGroup.Item>
						<ListGroup.Item className="lsi">Facebook: <a href="https://www.facebook.com/mikey314">Michael Zhao</a></ListGroup.Item>
						<ListGroup.Item className="lsi">Instagram: <a href="https://www.instagram.com/big_mike3141/">big_mike3141</a></ListGroup.Item>
						<ListGroup.Item className="lsi">Snapchat: <a href="https://www.snapchat.com/add/zhaova">zhaova</a></ListGroup.Item>
						<ListGroup.Item className="lsi">Tiktok: <a href="https://vm.tiktok.com/EfEPwo/">@mikeyyy.21</a></ListGroup.Item>
						<ListGroup.Item className="lsi">Discord: Mikey#0662</ListGroup.Item>
						<ListGroup.Item className="lsi">Wechat: mikey314</ListGroup.Item>
					</ListGroup>
				</div>
				{/* TODO: add picture */}
			</Container>
		)
	}
}

export default About;