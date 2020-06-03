import React from 'react';

import './css/BlackRights.css';
import './style.css'
import Footer from './Footer';

class BlackRights extends React.Component {
    render() {
        return (
            <div>
                <div className="header blm-header">
                    <h1>Black Rights</h1>
                </div>
                <div class="container">
                    <p>Black Rights</p>
                    <Footer credit="ABS news" link="https://abcnews.go.com/Politics/years-black-lives-matter-inspires-protest-movements/story?id=56702439"></Footer>
                </div>
            </div>
        )
    }
}

export default BlackRights;