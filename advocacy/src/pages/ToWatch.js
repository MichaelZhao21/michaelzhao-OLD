import React from 'react';

import './css/ToWatch.css';
import './style.css'
import Footer from './Footer';

class ToWatch extends React.Component {
    render() {
        return (
            <div>
                <div className="header watch-header">
                    <h1>Media to Watch</h1>
                </div>
                <div class="container">
                    <p>Media to Watch</p>
                    <Footer credit="dole777 on Unsplash" link="https://unsplash.com/photos/EQSPI11rf68"></Footer>
                </div>
            </div>
        )
    }
}

export default ToWatch;