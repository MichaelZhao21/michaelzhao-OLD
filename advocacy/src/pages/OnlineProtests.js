import React from 'react';

import './css/OnlineProtests.css';
import './style.css'
import Footer from './Footer';
import text from '../files/text.json';

class OnlineProtests extends React.Component {
    render() {
        return (
            <div>
                <div className="header online-header">
                    <h1>Online Protests and COVID-19</h1>
                </div>
                <div className="container">
                    <h2>The Effect of COVID-19 on In-Person Protests</h2>
                    <p className="p">{text.online[0]}</p>
                    <p className="mid"><b>{text.online[1]}</b></p>
                    <p className="p">{text.online[2]}</p>
                    <p className="p">{text.online[3]}</p>
                    <p className="p">{text.online[4]}</p>

                    <h2>Sources for this Section</h2>
                    <p className="citation">{text.online[5]}</p>
                    <Footer credit="rtrfm.com" link="https://rtrfm.com.au/story/social-activism/"></Footer>
                </div>
            </div>
        )
    }
}

export default OnlineProtests;