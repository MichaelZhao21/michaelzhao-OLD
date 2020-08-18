import React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';

class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <div className="main-content">
                    <div className="name first-name">MICHAEL</div>
                    <div className="name last-name">ZHAO</div>
                    <Link className="main-links about-link" to="/about">About me!</Link>
                    <a className="main-links advocacy-link" href="https://advocacy.michaelzhao.xyz">Advocacy</a>
                    <a className="main-links blog-link" href="https://blog.michaelzhao.xyz">Blog</a>
                </div>
            </div>
        );
    }
}

export default Main;
