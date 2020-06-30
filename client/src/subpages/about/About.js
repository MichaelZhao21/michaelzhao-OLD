import React from 'react';
import './About.scss';

class About extends React.Component {
	render() {
		return (
			<div className="about">
				<h1 className="about-title">About Me!</h1>
				<div className="custom-container about-intro">
					<p>Hey! My name is Michael Zhao, and I am going to be a senior at the <a href="https://tams.unt.edu/">Texas Academy of Mathematics and Science</a>! I love making and building things like this website! In addition to web design and programming, I also really like art. I've done a lot of sketching, but recently I've gotten into painting and even painted a mural on my wall (See projects soon). I also enjoy cooking and making all sorts of creative foods from traditional Chinese dishes to an entire roast turkey! I love hanging out with my friends and meeting new people. I'm always free to talk; just hit me up on one of my socials. Love you all! :DDD</p>
				</div>
				<div className="socials">
					<div className="spacer"></div>
				</div>
				{/* TODO: add picture */}
			</div>
		)
	}
}

export default About;