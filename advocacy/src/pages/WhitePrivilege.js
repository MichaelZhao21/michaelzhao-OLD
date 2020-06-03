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
                    <Footer credit="People to Places Travel" link="https://www.peopletoplacestravel.com/"></Footer>
                </div>
            </div>
        )
    }
}

export default WhitePrivilege;