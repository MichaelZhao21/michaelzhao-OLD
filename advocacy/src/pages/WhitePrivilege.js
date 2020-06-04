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
                <div class="container">
                    <p>White Privilege</p>
                    <Footer credit="WABE: Where ATL meets NPR" link="https://www.wabe.org/he-did-not-pray-fallout-grows-from-trump-s-photo-op-at-st-john-s-church/"></Footer>
                </div>
            </div>
        )
    }
}

export default WhitePrivilege;