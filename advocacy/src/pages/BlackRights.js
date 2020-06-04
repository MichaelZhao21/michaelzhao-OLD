import React from 'react';

import './css/BlackRights.css';
import './style.css'
import Footer from './Footer';
import BlmLogo from '../files/blm-logo.jpg';
import Poem from '../files/privilege-poem';
import NameWall from '../files/red-name-wall.jpg';

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
                    <p className="p">“#BlackLivesMatter was founded in 2013 in response to the acquittal of Trayvon Martin’s murderer. Black Lives Matter Foundation, Inc is a global organization in the US, UK, and Canada, whose mission is to eradicate white supremacy and build local power to intervene in violence inflicted on Black communities by the state and vigilantes. By combating and countering acts of violence, creating space for Black imagination and innovation, and centering Black joy, we are winning immediate improvements in our lives.”</p>
                    <p className="p">Starting on a local level, the Black Lives Matter Movement was originally meant to help build local Black power and speak out against violence happening to the Black community unfairly. Since then, they’ve expanded globally and committed to creating a world free of anti-Blackness, where every Black person has the “the social, economic, and political power to thrive.” (blacklivesmatter.com)</p>

                    <h2>#WhatMatters2020</h2>
                    <p>Ensure candidates for the 2020 election are held accountable for the issues that impact Black communities across the nation. Campaign goals and focuses:</p>
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
                    <p className="img-caption">The rate at which black Americans are killed by police is more than twice as high as the rate for white Americans. This is a non-comprehensive list of deaths at the hands of police in the U.S. since Eric Garner's death in July 2014. - LA Johnson/NPR</p>
                    <ul>
                        <li>In 2014, Eric Garner’s final words were “I can’t breathe” as officers sat on his head in New York City</li>
                        <li>In 2020, George Floyd’s final words were “I can’t breathe” as an officer knelt on his neck in Minneapolis</li>
                    </ul>
                    <p className="p">Over and over again, black people are being killed by police for the color of their skin. These names and this story is a reminder to people that so little has changed. None of these people deserve death. None of their families deserved to watch as their child or brother or parents get killed because of the color of their skin. No one ever deserves to feel unsafe purely because of how they look. Yet this situation isn’t getting better. More and more instances of brutality and racism towards blacks are happening yet little to no change being done by the people in power. Learn their names. Read their stories. Remember the people who died. Take action. That’s the only way for the situation to get better.</p>

                    <h2>I have privilege as a non-Black person because I can do all of these things without thinking twice</h2>
                    <pre>{Poem}</pre>

                    <h2>Sources for this Section</h2>
                    <p className="citation">Black Lives Matter. “Home.” Black Lives Matter, 31 May 2020, blacklivesmatter.com/.</p>
                    <p className="citation">DemCast Staff. “I Have Privilege as a White Person Because I Can Do All of These Things without Thinking Twice:” DemCast, 29 May 2020, demcastusa.com/2020/05/29/i-have-privilege-as-a-white-person-because-i-can-do-all-of-these-things-without-thinking-twice/.</p>
                    <p className="citation">NPR. “A Decade Of Watching Black People Die.” NPR, NPR, 30 May 2020, www.npr.org/2020/05/29/865261916/a-decade-of-watching-black-people-die.</p>
                    <Footer credit="ABS news" link="https://abcnews.go.com/Politics/years-black-lives-matter-inspires-protest-movements/story?id=56702439"></Footer>
                </div>
            </div>
        )
    }
}

export default BlackRights;