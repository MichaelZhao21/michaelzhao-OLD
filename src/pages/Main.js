import React from 'react';
import './Main.css';
import corner from '../graphics/corner.svg'

class Main extends React.Component {
	render() {
		return (
			<div className="Main">
				<img src={corner} className="Corner" alt=""></img>
				<div className="Name">
					Michael Zhao
				</div>
			</div>
		)
	}
}

export default Main;