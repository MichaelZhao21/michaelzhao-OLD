import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import './css/Home.css';
import Footer from './Footer';
import Quote from './Quotes';
import text from '../files/text.json';

class Home extends React.Component {
    render() {
        return (
            <div>   
                <div className="header home-header">
                    <h1>Social Issues of Today</h1>
                </div>
                <div className="container">
                    <Quote />
                    <div className="spacer"></div>
                    <Link className="section-button" to="/help">How to Help</Link>
                    <Link className="section-button" to="/current-events">Current Events</Link>
                    <Link className="section-button" to="/george-floyd-protests">George Floyd & Protests</Link>
                    <Link className="section-button" to="/black-rights">Black Rights</Link>
                    <Link className="section-button" to="/police-brutality">Police Brutality</Link>
                    <Link className="section-button" to="/online-protests">Online Protests and COVID-19</Link>
                    <Link className="section-button" to="/white-privilege">White Privilege</Link>
                    <Link className="section-button" to="/media">Social and Commercial Media</Link>
                    <Link className="section-button" to="/pride">Pride and Pridefall</Link>
                    <Link className="section-button" to="/external-resources">External Resources</Link>
                    <h2>About</h2>
                    <p className="p">{text.about[0]}</p>
                    <p className="p">{text.about[1]}</p>
                    <a className="section-button contribute-button" href="">Feedback / Questions / Want to Contribute?</a>
                    <div className="spacer"></div>
                    <Footer credit="Al Jazeera English" link="https://twitter.com/AJEnglish/status/1267428269470748673"></Footer>
                </div>
            </div>

        )
    }
}

export default Home;