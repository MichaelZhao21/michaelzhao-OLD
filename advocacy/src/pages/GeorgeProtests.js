import React from 'react';

import './css/GeorgeProtests.css';
import './style.css'
import Case from '../files/derek-case.pdf';
import Autopsy from '../files/autopsy.pdf';
import Footer from './Footer';
import text from '../files/text.json';

class GeorgeProtests extends React.Component {
    render() {
        return (
            <div>
                <div className="header george-header">
                    <h1>George Floyd & Protests</h1>
                </div>
                <div className="container">
                    <div className="spacer"></div>
                    <h2>Important Files</h2>
                    <a className="link link-list" href={Autopsy}><b>[PDF] George Floyd's Autopsy 5/26/2020</b></a>
                    <a className="link link-list" href={Case}><b>[PDF] Derek Chauvin's Case 5/29/2020</b></a>

                    <h2>What Happened to George Floyd</h2>
                    <div className="video">
                        <iframe className="nyt-vid" title="New York Times Video - Embed Player" frameborder="0" scrolling="no" allowfullscreen="true" marginheight="0" marginwidth="0" id="nyt_video_player" src="https://www.nytimes.com/video/players/offsite/index.html?videoId=100000007159353"></iframe>
                    </div>
                    <p>Facts from the video: </p>
                    <ul>
                        <li>Police were called when George Floyd paid for cigarettes with a $20 counterfeit bill and refused to return them</li>
                        <li>From what the police heard from the 911 call, they believed Floyd was drunk and out of control</li>
                        <li>However, he did NOT act violently and was extremely distressed when he was first pulled out of his car, only 2 minutes from when the police arrived on the scene</li>
                        <li>Floyd did not want to enter the police vehicle because he was said to be claustrophobic</li>
                        <li>After getting in, however, Chauvin pulls Floyd OUT of the police vehicle and onto the street (Motivation is unknown)</li>
                        <li>Lying on the pavement, Floyd is surrounded by all 4 officers, with 3 putting their weight on him</li>
                        <li>Despite calls for an ambulance, Derek Chauvin NEVER takes his knee off of Floyd’s neck</li>
                        <li>The police officers can be heard saying to Floyd “Well, get up, get in the car, man” and he responds with “I will,” yet Chauvin still does not take his knee off of Floyd’s neck</li>
                        <li>Floyd said “I can’t breathe” 16 times in the span of 5 minutes</li>
                        <li>Chauvin putting his knee on Floyd’s neck is banned in most police departments in America</li>
                        <li>In Minneapolis, it's only allowed if the suspect is “actively resisting,” which Floyd clearly wasn't</li>
                        <li>Both autopsies (public and private) marked the cause of death as a homicide</li>
                        <li>(As of 6/4/2020) Chauvin is charged with 2nd degree murder, and the 3 other cops were charged with aiding and abetting murder</li>
                        <li><b>8 minutes and 46 seconds.</b> That’s how long Chauvin’s knee was on Floyd’s neck</li>
                    </ul>

                    <h2>Analysis of Trials and Outcomes</h2>
                    <ul>
                        <li><b>First degree murder</b>: A deliberate, premeditated killing. The hardest part of the conviction is the premediation, where the defendant planned the killing in advance</li>
                        <li><b>Second degree murder</b>: An intentional murder (drive-by shooting meant to kill) or when someone is unintentionally murdered duing a felony (like a robbery)</li>
                        <li><b>Third degree murder</b>: Normally very rare, described as unintentional murder where the defendant caused a reckless act that endangers someone to the point of death</li>
                    </ul>
                    <p className="p">{text.george[1]}</p>
                    <p className="p">{text.george[2]}</p>

                    <h2>Sources for this Section</h2>
                    <p className="citation">{text.george[0]}</p>
                    <p className="citation">{text.george[3]}</p>
                    <p className="citation">{text.george[4]}</p>

                    <div className="spacer"></div>
                    <Footer credit="Time Magazine" link="https://time.com/5845632/london-protests-george-floyd/"></Footer>
                </div>
            </div>
        )
    }
}

export default GeorgeProtests;