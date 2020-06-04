import React from 'react';

import './style.css';
import './css/Help.css';
import Footer from './Footer';

class Help extends React.Component {
    render() {
        return (
            <div>
                <div className="header help-header">
                    <h1>How to Help</h1>
                </div>
                <div class="container">
                    <h2>Petitions to Sign</h2>
                    
                    <h3>Change.org</h3>
                    <a className="link link-list" href="https://www.change.org/p/mayor-jacob-frey-justice-for-george-floyd?source_location=petitions_browse">Justice for George Floyd</a>
                    <a className="link link-list" href="https://www.change.org/p/andy-beshear-justice-for-breonna-taylor?source_location=petitions_browse">Justice for Breonna Taylor</a>
                    <a className="link link-list" href="https://www.change.org/p/district-attorney-tom-durden-justice-for-ahmaud-arbery-i-run-with-maud?source_location=petitions_browse">Justice for Ahmaud Arbery! I Run with Maud!</a>
                    <a className="link link-list" href="https://www.change.org/p/ventilator-manufacturers-remove-barriers-to-fixing-ventilators?source_location=petitions_browse">Remove barriers to fixing ventilators</a>
                    <a className="link link-list" href="https://www.change.org/p/minneapolis-district-attorney-raise-the-degree?source_location=petitions_browse">RAISE THE DEGREE (Of Derek Chauvin's Murder Conviction)</a>
                    <a className="link link-list" href="https://www.change.org/p/change-org-the-minneapolis-police-officers-to-be-charged-for-murder-after-killing-innocent-black-man?source_location=petitions_browse">Charge the Other Three Officers</a>
                    
                    <h3>Others</h3>
                    <a className="link link-list" href="https://blacklivesmatter.com/defundthepolice/">BLM: #Defund the Police</a>
                    <a className="link link-list" href="https://www.naacp.org/campaigns/we-are-done-dying/">NAACP: We are Done Dying Campagin</a>

                    <h2>Places to Donate</h2>
                    <h3>Lists</h3>
                    <a className="link link-list" href="https://bailfunds.github.io/">List of Bail Funds for Protesters Across the Country</a>
                    <a className="link link-list" href="https://docs.google.com/document/d/1yLWGTQIe3967hdc9RSxBq5s6KKZHe-3_mWp5oemd7OA/preview?pru=AAABcpUiX3k%2AY6Q4I6UBtkH3lLz9GVLg0A">Reclaim the Block's List of Worthy Organizations to Donate to</a>

                    <h3>Donation Pages</h3>
                    <a className="link link-list" href="https://emergencyreleasefund.com/">Emergency Release Fund for Trans in New York</a>
                    <a className="link link-list" href="https://www.communityjusticeexchange.org/nbfn-directory">National Bail Fund Network</a>
                    <a className="link link-list" href="https://bailproject.org/">The Bail Project</a>
                    <a className="link link-list" href="https://secure.actblue.com/donate/ms_blm_homepage_2019">Donate to Black Lives Matter directly</a>
                    <a className="link link-list" href="https://secure.actblue.com/donate/naacp-ep-2020">NAACP Empowerment Program</a>
                    <a className="link link-list" href="https://www.gofundme.com/f/9v4q2-justice-for-breonna-taylor">Justice for Breonna Taylor (gofundme)</a>
                    <a className="link link-list" href="https://www.gofundme.com/f/justice-for-dion-johnson">Justic for Dion Johnson (gofundme)</a>
                    <a className="link link-list" href="https://www.gofundme.com/f/justice-for-regis">Justice For Regis (gofundme)</a>

                    <h2>Going to Protest</h2>

                    <h2>Support</h2>
                    <a className="link link-list" href="https://docs.google.com/document/d/1qpn5fFrG4-FLfGo3cUsiwb7OvDnnL10uOnF50X-1v90/edit">List of Black-Owned Businesses</a>

                    <div className="spacer"></div>
                    <Footer credit="Perry Grone on Unsplash" link="https://unsplash.com/photos/lbLgFFlADrY"></Footer>
                </div>
            </div>
        )
    }
}

export default Help;