import React from 'react';
import Game from '../../matter/Game';
import './Main.scss';

class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <div className="main-content">
                    
                </div>
                <div className="game-div">
                    <Game />
                </div>
            </div>
        );
    }
}

export default Main;