import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

import './style.css'
import './css/PoliceBrutality.css';
import Footer from './Footer';
import text from '../files/text.json';

class PoliceBrutality extends React.Component {
    render() {
        return (
            <div>
                <div className="header brutality-header">
                    <h1>Police Brutality</h1>
                </div>
                <div className="container">
                    <div className="spacer"></div>
                    <h2>Police Brutality in Riots</h2>
                    <InstagramEmbed className="inst" url="https://instagr.am/p/CA2ggyvBAPr" maxWidth={1000} hideCaption={true} containerTagName='div'></InstagramEmbed>
                    <p className="p">{text.police[0]}</p>
                    <h2>#8CantWait</h2>
                    <InstagramEmbed className="inst" url="https://instagr.am/p/CA-uHIdHh11" maxWidth={1000} hideCaption={true} containerTagName='div'></InstagramEmbed>
                    <div className="spacer"></div>
                    <p className="mid">
                        <a className="inline-link" href="https://8cantwait.org/">8cantwait.org</a>
                        : these 8 policies can decrease police violence by 72%
                    </p>
                    <Footer credit="Vox from Mostafa Bassim/Anadolu Agency via Getty Images" link="https://www.vox.com/science-and-health/2020/6/1/21276828/pandemic-protests-police-public-health-black-lives-matter"></Footer>
                </div>
            </div>
        )
    }
}

export default PoliceBrutality;