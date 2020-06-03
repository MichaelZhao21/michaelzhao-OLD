import React from 'react';

import './css/CurrentEvents.css';
import './style.css';
import Footer from './Footer';

class CurrentEvents extends React.Component {
    render() {
        return (
            <div>
                <div className="header events-header">
                    <h1>Current Events</h1>
                </div>
                <div className="container">
                    <ul>
                        <li>
                            <a className="link" href="https://www.cnbc.com/2020/06/03/3-more-cops-charged-in-george-floyd-death-other-officers-murder-charge-upgraded.html">[6/3/2020 - 2:10pm] 3 more cops charged in George Floyd death, other officer’s murder charge upgraded</a>
                        </li>
                    </ul>
                    <Footer credit="Bank Phrom on Unsplash" link="https://unsplash.com/photos/Tzm3Oyu_6sk"></Footer>
                </div>
            </div>
        )
    }
}

export default CurrentEvents;