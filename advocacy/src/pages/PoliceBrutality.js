import React from 'react';

import './style.css'
import './css/PoliceBrutality.css';
import Case from '../files/derek-case.pdf';
import Footer from './Footer';

class PoliceBrutality extends React.Component {
    render() {
        return (
            <div>
                <div className="header brutality-header">
                    <h1>Police Brutality</h1>
                </div>
                <div className="container">
                    <p>Police Brutality</p>
                    <a href={Case}>Derek Chauvin's Case 5/29/2020</a>
                    <Footer credit="Vox from Mostafa Bassim/Anadolu Agency via Getty Images" link="https://www.vox.com/science-and-health/2020/6/1/21276828/pandemic-protests-police-public-health-black-lives-matter"></Footer>
                </div>
            </div>
        )
    }
}

export default PoliceBrutality;