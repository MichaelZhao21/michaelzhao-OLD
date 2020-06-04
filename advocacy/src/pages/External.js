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
                <div className="container">
                    <div className="spacer"></div>
                    <p>This section will just be a compilation of good social media posts to read/watch/listen to. Again, remember that there is ALWAYS a bias in any source of information, especially through social media. However, when taken with a grain of salt, the information from social media can be extremely precious and helps with the spread of activism and change.</p>
                    <Footer credit="dole777 on Unsplash" link="https://unsplash.com/photos/EQSPI11rf68"></Footer>
                </div>
            </div>
        )
    }
}

export default External;