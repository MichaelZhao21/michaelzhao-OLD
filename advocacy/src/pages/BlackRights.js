import React from 'react';

import './css/BlackRights.css';
import './style.css'
import Footer from './Footer';
import BlmLogo from '../files/blm-logo.jpg';
import Poem from '../files/privilege-poem';
import NameWall from '../files/red-name-wall.jpg';
import text from '../files/text.json';

class BlackRights extends React.Component {
    render() {
        return (
            <div>
                <div className="header blm-header">
                    <h1>Black Rights</h1>
                </div>
                <div class="container">
                    <h2>The Black Lives Matter Movement</h2>
                    <img className="doc-img blm-logo" src={BlmLogo} alt="Black Lives Matter Logo"></img>
                    <p className="img-caption">The Black Lives Matter Logo from blacklivesmatter.com</p>
                    <p className="p">{text.black[0]}</p>
                    <p className="p">{text.black[1]}</p>

                    <h2>#WhatMatters2020</h2>
                    <p>{text.black[2]}</p>
                    <ul className="left">
                        <li>Racial Injustice</li>
                        <li>Police Brutality</li>
                        <li>Criminal Justice Reform</li>
                        <li>Black Immigration</li>
                        <li>Economic Injustice</li>
                        <li>LGBTQIA+ and Human Rights</li>
                        <li>Environmental Conditions</li>
                        <li>Voting Rights & Suppression</li>
                        <li>Healthcare</li>
                        <li>Government Corruption</li>
                        <li>Education</li>
                        <li>Commonsense Gun Laws</li>
                    </ul>

                    <h2>A Decade Of Watching Black People Die</h2>
                    <img className="doc-img name-wall" src={NameWall} alt="Wall of Names of Black People who have Died"></img>
                    <p className="img-caption">{text.black[3]}</p>
                    <ul>
                        <li>In 2014, Eric Garner’s final words were “I can’t breathe” as officers sat on his head in New York City</li>
                        <li>In 2020, George Floyd’s final words were “I can’t breathe” as an officer knelt on his neck in Minneapolis</li>
                    </ul>
                    <p className="p">{text.black[4]}</p>

                    <h2>I have privilege as a non-Black person because I can do all of these things without thinking twice</h2>
                    <pre>{Poem}</pre>

                    <h2>Sources for this Section</h2>
                    <p className="citation">{text.black[5]}</p>
                    <p className="citation">{text.black[6]}</p>
                    <p className="citation">{text.black[7]}</p>
                    <p className="citation">{text.black[8]}</p>
                    <Footer credit="ABS news" link="https://abcnews.go.com/Politics/years-black-lives-matter-inspires-protest-movements/story?id=56702439"></Footer>
                </div>
            </div>
        )
    }
}

export default BlackRights;