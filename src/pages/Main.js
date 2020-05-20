import React from 'react';
import './Main.css';
import building from '../graphics/building.svg'

class Main extends React.Component {
	render() {
		return (
			<div className="Main">
				<img src={building} className="Corner" alt=""></img>
				<div className="Name">
					<b>Michael<br/>Zhao</b>
				</div>
			</div>
		)
	}
}

export default Main;