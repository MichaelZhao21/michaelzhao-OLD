import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import './css/Home.css';
import Footer from './Footer';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="header home-header">
                    <h1>Social Issues of Today</h1>
                </div>
                <div className="container">
                    <div className="spacer"></div>
                    <Link className="section-button" to="/help">How to Help</Link>
                    <Link className="section-button" to="/current-events">Current Events</Link>
                    <Link className="section-button" to="/george-floyd-protests">George Floyd Protests</Link>
                    <Link className="section-button" to="/black-rights">Black Rights</Link>
                    <Link className="section-button" to="/police-brutality">Police Brutality</Link>
                    <Link className="section-button" to="/online-protests">Online Protests and COVID-19</Link>
                    <Link className="section-button" to="/white-privilege">White Privilege</Link>
                    <Link className="section-button" to="/media">Social and Commercial Media</Link>
                    <Link className="section-button" to="/pride">Pride and Pridefall</Link>
                    <Link className="section-button" to="/to-watch">Media to Watch</Link>
                    <h2>About</h2>
                    <p className="p">
                    In a world filled with oppression and violence, there are countless people speaking out against societal issues both online and in person. Over the course of the past two weeks, I’ve seen hundreds of social media posts across all platforms (Instagram, Facebook, Twitter, Tiktok, Reddit, etc) discussing the current social issues, and I’m not going to lie, I’ve been quiet about these issues up until now. As an Asian American growing up in a community with a majority of Asians, I’ve never felt seriously out of place or alienated. As such, I’ve sat at home in a state of contentment for way too long. I can admit to being a part of the privileged who sit by and watch the world fall apart, completely ignorant to what I can do to help.
                    </p>
                    <p className="p">
                    However, as world issues continue to escalate, I need to speak out, and this document is my contribution. I’ll be talking about a series of issues and trying my best to base my arguments on facts, but keep in mind that I’m still a person with biases that might conflict with yours. Feel free to comment on this doc or message me about anything because I want to keep an open mind on these issues. I’ll try to keep this doc updated and make changes that I see fit. Please don’t harass people or make blatantly rude and insensitive comments. At the end of the day, I’m just another person witnessing this situation, and I want to make sure that everyone is knowledgeable about the issues with our current world. I highly encourage you to speak out, donate, protest, and do whatever you can to help out, even if it’s small because everyone has the power to make an impact on this situation.
                    </p>
                    <div className="spacer"></div>
                    <Footer credit="Al Jazeera English" link="https://twitter.com/AJEnglish/status/1267428269470748673"></Footer>
                </div>
            </div>

        )
    }
}

export default Home;