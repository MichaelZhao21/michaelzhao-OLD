import React from 'react';

import './css/GeorgeProtests.css';
import './style.css'
import Case from '../files/derek-case.pdf';
import Autopsy from '../files/autopsy.pdf';
import Footer from './Footer';

class GeorgeProtests extends React.Component {
    render() {
        return (
            <div>
                <div className="header george-header">
                    <h1>George Floyd & Protests</h1>
                </div>
                <div class="container">
                    <div className="spacer"></div>
                    <a className="link link-list" href={Case}>Derek Chauvin's Case 5/29/2020</a>
                    <a className="link link-list" href={Autopsy}>George Floyd's Autopsy 5/26/2020</a>
                    <div className="spacer"></div>
                    <Footer credit="Time Magazine" link="https://time.com/5845632/london-protests-george-floyd/"></Footer>
                </div>
            </div>
        )
    }
}

export default GeorgeProtests;