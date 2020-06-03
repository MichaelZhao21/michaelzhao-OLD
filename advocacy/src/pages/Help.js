import React from 'react';

import './style.css';
import './css/Help.css';
import Footer from './Footer';

class Help extends React.Component {
    render() {
        return (
            <div>
                <div className="header help-header">
                    <h1>How to Help</h1>
                </div>
                <div class="container">
                    <p>How to Help</p>
                    <Footer credit="Perry Grone on Unsplash" link="https://unsplash.com/photos/lbLgFFlADrY"></Footer>
                </div>
            </div>
        )
    }
}

export default Help;