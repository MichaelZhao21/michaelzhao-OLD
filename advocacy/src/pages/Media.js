import React from 'react';

import './style.css';
import './css/Media.css';
import Footer from './Footer';

class Media extends React.Component {
    render() {
        return (
            <div>
                <div className="header media-header">
                    <h1>Social and Commerical Media</h1>
                </div>
                <div class="container">
                    <p>Social and Commerical Media</p>
                    <Footer credit="Filip Mishevski on Unsplash" link="https://unsplash.com/photos/c5QdMcuFlgY"></Footer>
                </div>
            </div>
        )
    }
}

export default Media;