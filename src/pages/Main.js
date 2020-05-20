import React from 'react';
import './Main.css';
import background from '../graphics/john-towner.jpg'

class Main extends React.Component {
	render() {
		return (
			<div className="Main">
				<img src={background} className="Corner" alt=""></img>
				<div className="Name">
					<b>Michael<br/>Zhao</b>
				</div>
			</div>
		)
	}
}

export default Main;