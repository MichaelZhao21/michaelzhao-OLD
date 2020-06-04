import React from 'react';

import './css/BlackRights.css';
import './style.css'
import Footer from './Footer';
import BlmLogo from '../files/blm-logo.png';
import Poem from '../files/privilege-poem';

class BlackRights extends React.Component {
    render() {
        return (
            <div>
                <div className="header blm-header">
                    <h1>Black Rights</h1>
                </div>
                <div class="container">
                    <h2>The Black Lives Matter Movement</h2>
                    <img className="doc-img" src={BlmLogo} alt="Black Lives Matter Logo"></img>
                    <p>“#BlackLivesMatter was founded in 2013 in response to the acquittal of Trayvon Martin’s murderer. Black Lives Matter Foundation, Inc is a global organization in the US, UK, and Canada, whose mission is to eradicate white supremacy and build local power to intervene in violence inflicted on Black communities by the state and vigilantes. By combating and countering acts of violence, creating space for Black imagination and innovation, and centering Black joy, we are winning immediate improvements in our lives.”</p>
                    <p>Starting on a local level, the Black Lives Matter Movement was originally meant to help build local Black power and speak out against violence happening to the Black community unfairly. Since then, they’ve expanded globally and committed to creating a world free of anti-Blackness, where every Black person has the “the social, economic, and political power to thrive.” (blacklivesmatter.com)</p>

                    <h2>I have privilege as a non-Black person because I can do all of these things without thinking twice</h2>
                    <pre>{Poem}</pre>

                    <h2>#WhatMatters2020</h2>

                    <h2>Sources for this Section</h2>
                    <p className="citation">Black Lives Matter. “Home.” Black Lives Matter, 31 May 2020, blacklivesmatter.com/.</p>

                    <Footer credit="ABS news" link="https://abcnews.go.com/Politics/years-black-lives-matter-inspires-protest-movements/story?id=56702439"></Footer>
                </div>
            </div>
        )
    }
}

export default BlackRights;