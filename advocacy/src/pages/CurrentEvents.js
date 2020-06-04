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
                    <div className="spacer"></div>
                    <p className="mid">Here is a list of current events happening. I'll try to update it daily, but remember to do your own research!</p>
                    <a className="link link-list events" href="https://www.theguardian.com/us-news/live/2020/jun/03/george-floyd-protests-us-live-news-updates-donald-trump">[LIVE] George Floyd killing: ex-defense secretary condemns Trump's handling of protests</a>
                    <a className="link link-list events" href="https://www.cnbc.com/2020/06/03/3-more-cops-charged-in-george-floyd-death-other-officers-murder-charge-upgraded.html">[6/3/2020 - 2:10pm] 3 more cops charged in George Floyd death, other officer’s murder charge upgraded</a>
                    <a className="link link-list events" href="https://www.nytimes.com/2020/06/03/learning/lesson-plans/teaching-ideas-and-resources-to-help-students-make-sense-of-the-george-floyd-protests.html">[6/3/2020 - 6:25pm] Teaching Ideas and Resources to Help Students Make Sense of the George Floyd Protests</a>
                    <Footer credit="Bank Phrom on Unsplash" link="https://unsplash.com/photos/Tzm3Oyu_6sk"></Footer>
                </div>
            </div>
        )
    }
}

export default CurrentEvents;