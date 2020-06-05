import React from 'react';

import './style.css'
import './css/Pride.css'
import Footer from './Footer';
import pridefall from '../files/pridefall-4chan-post.jpg';
import text from '../files/text.json';

class Pride extends React.Component {
    render() {
        return (
            <div>
                <div className="header pride-header">
                    <h1>Pride and Pridefall</h1>
                </div>
                <div className="container">
                    <h2>Pridefall</h2>
                    <p>
                        <a href={pridefall}>
                            <img className="doc-img drop-img pride-img" src={pridefall}></img>
                        </a>
                    </p>

                    <h2>Activities of Operation Pridefall</h2>
                    <p className="p">{text.pride[0]}</p>

                    <h2>Sources for this section</h2>
                    <p className="citation">{text.pride[1]}</p>
                    <div className="spacer"></div>
                    <Footer credit="Mercedes Mehling on Unsplash" link="https://unsplash.com/photos/7J7x8HLXQKA"></Footer>
                </div>
            </div>
        )
    }
}

export default Pride;