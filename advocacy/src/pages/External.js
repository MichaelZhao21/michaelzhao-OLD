import React from 'react';

import './css/External.css';
import './style.css'
import Footer from './Footer';

class External extends React.Component {
    render() {
        return (
            <div>
                <div className="header external-header">
                    <h1>External Resources</h1>
                </div>
                <div class="container">
                    <p>External Resources</p>
                    <Footer credit="dole777 on Unsplash" link="https://unsplash.com/photos/EQSPI11rf68"></Footer>
                </div>
            </div>
        )
    }
}

export default External;