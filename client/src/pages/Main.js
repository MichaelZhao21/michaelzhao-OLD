import React from 'react';
import './Main.scss';
import Game from '../matter/Game';

import { withRouter } from 'react-router-dom';

class Main extends React.Component {
	handleClick = () => {
		this.props.history.push("/about");
	}

	render() {
		return (
			<div>
				<Game />
			</div>
		)
	}
}

export default withRouter(Main);