import React from 'react';
import './css/Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <p className="caption mid">
                    Contact: <a className="name-link" href="https://michaelzhao.xyz/about">Michael Zhao </a>
                    | Header Photo by <a className="name-link" href={this.props.link}>{this.props.credit}</a>
                 </p>
                <div className="spacer"></div>
            </div>
        )
    }
}

export default Footer;