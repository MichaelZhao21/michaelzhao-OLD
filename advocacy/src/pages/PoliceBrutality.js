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
                    <Footer credit="Vox from Mostafa Bassim/Anadolu Agency via Getty Images" link="https://www.vox.com/science-and-health/2020/6/1/21276828/pandemic-protests-police-public-health-black-lives-matter"></Footer>
                </div>
            </div>
        )
    }
}

export default PoliceBrutality;