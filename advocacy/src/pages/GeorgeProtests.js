import React from 'react';

import './css/GeorgeProtests.css';
import './style.css'
import Case from '../files/derek-case.pdf';
import Autopsy from '../files/autopsy.pdf';
import Footer from './Footer';

class GeorgeProtests extends React.Component {
    render() {
        return (
            <div>
                <div className="header george-header">
                    <h1>George Floyd & Protests</h1>
                </div>
                <div class="container">
                    <div className="spacer"></div>
                    <a className="link link-list" href={Case}>Derek Chauvin's Case 5/29/2020</a>
                    <a className="link link-list" href={Autopsy}>George Floyd's Autopsy 5/26/2020</a>

                    <h2>George Floyd Case Explained</h2>
                    <div className="video">
                        <iframe title="New York Times Video - Embed Player" width="480" height="321" frameborder="0" scrolling="no" allowfullscreen="true" marginheight="0" marginwidth="0" id="nyt_video_player" src="https://www.nytimes.com/video/players/offsite/index.html?videoId=100000007159353"></iframe>
                    </div>
                    <p>Facts from the video: </p>
                    <ul>
                        <li>Police were called when George Floyd paid for cigarettes with a $20 counterfeit bill</li>
                        <li>They believed he was drunk & out of control from the 911 call</li>
                        <li>However, he did NOT act violently and was extremely distressed when he was first pulled out of his car</li>
                        <li>Floyd did not want to enter the police car because he was claustrophobic</li>
                        <li>Chauvin pulls Floyd OUT of the police vehicle and onto the street (Motivation unknown)</li>
                        <li>All 4 officers are surrounding Floyd and 3 are putting weight on him</li>
                        <li>Floyd is struggling on the ground and is shouting out to help</li>
                        <li>Despite calls for EMS code 2 and 3, Derek Chauvin NEVER takes his knee off of Floyd’s neck</li>
                        <li>It is audibly heard that the police officers say to Floyd “Well, get up, get in the car, man” and he responds with “I will” yet Derek Chauvin still does not take his knee off of Floyd’s neck</li>
                        <li>He said “I can’t breathe” 16 times in the span of 5 minutes</li>
                        <li>The action of putting his knee on Floyd’s neck is banned in most police departments</li>
                        <li>In Minneapolis, it is only allowed if the suspect is “actively resisting”</li>
                        <li>Both autopsies (public and private) were marked homicides</li>
                        <li>(As of 6/4/2020) Chauvin is charged with 2nd degree murder and the 3 other cops were charged with aiding and abetting murder</li>
                        <li><b>8 minutes and 46 seconds.</b> That’s how long Chauvin’s knee was on Floyd’s neck</li>
                    </ul>

                    <div className="spacer"></div>
                    <Footer credit="Time Magazine" link="https://time.com/5845632/london-protests-george-floyd/"></Footer>
                </div>
            </div>
        )
    }
}

export default GeorgeProtests;