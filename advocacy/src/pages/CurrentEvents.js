import React from 'react';

import './css/CurrentEvents.css';
import './style.css';
import Footer from './Footer';
import current from '../files/current-events.json';

class CurrentEvents extends React.Component {
    render() {
        const events = [];
        var flop = false;
        for (var i = 0; i < current.events.length; i++) {
            flop = !flop;
            var cn = "link link-list events " + (flop ? "events-dark" : "");
            events.push(<a className={cn} href={current.events[i][1]}>{current.events[i][0]}</a>);
        }
        
        return (
            <div>
                <div className="header events-header">
                    <h1>Current Events</h1>
                </div>
                <div className="container">
                    <div className="spacer"></div>
                    <p className="mid">Here is a list of current events happening. I'll try to update it daily, but remember to do your own research. (All times are in EDT!)</p>
                    {events}
                    <Footer credit="Bank Phrom on Unsplash" link="https://unsplash.com/photos/Tzm3Oyu_6sk"></Footer>
                </div>
            </div>
        )
    }
}

export default CurrentEvents;