import React from 'react';

import './css/OnlineProtests.css';
import './style.css'
import Footer from './Footer';

class OnlineProtests extends React.Component {
    render() {
        return (
            <div>
                <div className="header online-header">
                    <h1>Online Protests and COVID-19</h1>
                </div>
                <div class="container">
                    <p>Online Protests and COVID-19</p>
                    <Footer credit="rtrfm.com" link="https://rtrfm.com.au/story/social-activism/"></Footer>
                </div>
            </div>
        )
    }
}

export default OnlineProtests;