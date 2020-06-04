import React from 'react';

import './css/WhitePrivilege.css';
import './style.css'
import Footer from './Footer';

class WhitePrivilege extends React.Component {
    render() {
        return (
            <div>
                <div className="header white-header">
                    <h1>White Privilege</h1>
                </div>
                <div clasNames="container">
                    <h2>TRUMP</h2>
                    <div className="video">
                        <iframe className="nyt-vid" title="New York Times Video - Embed Player" frameborder="0" scrolling="no" allowfullscreen="true" marginheight="0" marginwidth="0" id="nyt_video_player" src="https://www.nytimes.com/video/players/offsite/index.html?videoId=100000007168615"></iframe>
                    </div>
                    <Footer credit="WABE: Where ATL meets NPR" link="https://www.wabe.org/he-did-not-pray-fallout-grows-from-trump-s-photo-op-at-st-john-s-church/"></Footer>
                </div>
            </div>
        )
    }
}

export default WhitePrivilege;