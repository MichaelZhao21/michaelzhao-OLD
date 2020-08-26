import React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cc: 0 };
    }

    componentDidMount() {
        setInterval(() => {
            let ccc = this.state.cc + 5;
            this.setState({
                cc: ccc
            });
        }, 100);
    }

    render() {
        return (
            <div className="Main">
                <div className="main-content">
                    <h1 className="name first-name">michael</h1>
                    <h1 className="name last-name">zhao</h1>
                    <p className="desc">haii welcome to my website :D</p>
                    <Link
                        className="main-links about-link"
                        to="/about"
                        style={{color: `hsl(${this.state.cc}, 100%, 80%)`}}
                    >
                        About me!
                    </Link>
                    <a
                        className="main-links advocacy-link"
                        href="https://advocacy.michaelzhao.xyz"
                        style={{color: `hsl(${this.state.cc - 20}, 100%, 80%)`}}
                    >
                        Advocacy
                    </a>
                    <a
                        className="main-links blog-link"
                        href="https://blog.michaelzhao.xyz"
                        style={{color: `hsl(${this.state.cc - 40}, 100%, 80%)`}}
                    >
                        Blog
                    </a>
                </div>
            </div>
        );
    }
}

export default Main;
