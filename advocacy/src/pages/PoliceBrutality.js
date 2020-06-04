import React from 'react';

import './style.css'
import './css/PoliceBrutality.css';
import Footer from './Footer';

class PoliceBrutality extends React.Component {
    render() {
        return (
            <div>
                <div className="header brutality-header">
                    <h1>Police Brutality</h1>
                </div>
                <div className="container">
                    <h2>TRUMP</h2>
                    <div className="video">
                        <iframe title="New York Times Video - Embed Player" width="480" height="321" frameborder="0" scrolling="no" allowfullscreen="true" marginheight="0" marginwidth="0" id="nyt_video_player" src="https://www.nytimes.com/video/players/offsite/index.html?videoId=100000007168615"></iframe>"
                    </div>
                    <Footer credit="Vox from Mostafa Bassim/Anadolu Agency via Getty Images" link="https://www.vox.com/science-and-health/2020/6/1/21276828/pandemic-protests-police-public-health-black-lives-matter"></Footer>
                </div>
            </div>
        )
    }
}

export default PoliceBrutality;