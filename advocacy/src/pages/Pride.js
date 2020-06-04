import React from 'react';

import './style.css'
import './css/Pride.css'
import Footer from './Footer';

class Pride extends React.Component {
    render() {
        return (
            <div>
                <div className="header pride-header">
                    <h1>Pride and Pridefall</h1>
                </div>
                <div className="container">
                    <p>Pride and Pridefall</p>
                    <Footer credit="Mercedes Mehling on Unsplash" link="https://unsplash.com/photos/7J7x8HLXQKA"></Footer>
                </div>
            </div>
        )
    }
}

export default Pride;