import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

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
                    <h2 className="colored-section">Petitions to Sign</h2>

                    <h3>Change.org</h3>
                    <a className="link link-list" href="https://www.change.org/p/mayor-jacob-frey-justice-for-george-floyd?source_location=petitions_browse">Justice for George Floyd</a>
                    <a className="link link-list" href="https://www.change.org/p/andy-beshear-justice-for-breonna-taylor?source_location=petitions_browse">Justice for Breonna Taylor</a>
                    <a className="link link-list" href="https://www.change.org/p/govia-thameslink-justice-for-belly-mujinga">Justice for Belly Mujinga</a>
                    <a className="link link-list" href="https://www.change.org/p/justice-for-tony-mcdade?use_react=false">Justice for Tony McDade</a>
                    <a className="link link-list" href="https://www.change.org/p/district-attorney-tom-durden-justice-for-ahmaud-arbery-i-run-with-maud?source_location=petitions_browse">Justice for Ahmaud Arbery! I Run with Maud!</a>
                    <a className="link link-list" href="https://www.change.org/p/ventilator-manufacturers-remove-barriers-to-fixing-ventilators?source_location=petitions_browse">Remove barriers to fixing ventilators</a>
                    <a className="link link-list" href="https://www.change.org/p/minneapolis-district-attorney-raise-the-degree?source_location=petitions_browse">RAISE THE DEGREE (Of Derek Chauvin's Murder Conviction)</a>
                    <a className="link link-list" href="https://www.change.org/p/change-org-the-minneapolis-police-officers-to-be-charged-for-murder-after-killing-innocent-black-man?source_location=petitions_browse">Charge the Other Three Officers</a>
                    <a className="link link-list" href="https://www.change.org/p/national-action-against-police-brutality-and-murder">NATIONAL ACTION AGAINST POLICE BRUTALITY! PROSECUTE POLICE WHO MURDER UNARMED INDIVIDUALS!</a>
                    <a className="link link-list" href="https://www.change.org/p/un-and-us-government-ban-the-use-of-rubber-bullets?recruiter=922712485&recruited_by_id=62d8f120-fdb6-11e8-8dbd-0dee42fd9442&utm_source=share_petition&utm_medium=copylink&utm_campaign=petition_dashboard">Ban the use of rubber bullets for crowd control</a>

                    <h3>Others</h3>
                    <a className="link link-list" href="https://blacklivesmatter.com/defundthepolice/">BLM: #Defund the Police</a>
                    <a className="link link-list" href="https://www.naacp.org/campaigns/we-are-done-dying/">NAACP: We are Done Dying Campagin</a>
                    <a className="link link-list" href="https://www.wecantbreathenational.org/">#WeCantBreathe</a>
                    <a className="link link-list" href="https://www.reclaimtheblock.org/home">TELL MINNEAPOLIS CITY COUNCIL TO DEFUND THE POLICE</a>

                    <h2 className="colored-section">Places to Donate</h2>
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
                    <a className="link link-list" href="https://www.gofundme.com/f/justice-for-dion-johnson">Justice for Dion Johnson (gofundme)</a>
                    <a className="link link-list" href="https://www.gofundme.com/f/justice-for-regis">Justice For Regis (gofundme)</a>
                    <a className="link link-list" href="https://www.gofundme.com/f/rip-belly-mujinga">RIP Belly Mujinga (gofundme)</a>
                    <a className="link link-list" href="https://aapf.org/supportshn">#SayHerName - call attention to police violence against Black femmes</a>
                    <a className="link link-list" href="https://www.gofundme.com/f/justicefordavidmcatee">Justice for David McAtee (gofundme)</a>

                    <h3>Donating without Spending Money</h3>
                    <a className="link link-list" href="https://twitter.com/kookpics/status/1268534687112335361?s=21">Click on links to pages that earn money through clicks</a>
                    <a className="link link-list" href="https://www.youtube.com/watch?v=bCgLa25fDHM&t=3016s">Stream this video to generate ad revenue!</a>

                    <h2 className="colored-section">Going to Protest</h2>
                    <InstagramEmbed className="inst" url='https://instagr.am/p/CA0jzCdg_vR' maxWidth={800} hideCaption={false} containerTagName='div'></InstagramEmbed>

                    <h2 className="colored-section">Other Resources</h2>
                    <a className="link link-list" href="https://docs.google.com/document/d/1qpn5fFrG4-FLfGo3cUsiwb7OvDnnL10uOnF50X-1v90/edit">List of Black-Owned Businesses to Support</a>
                    <a className="link link-list" href="https://blacklivesmatters.carrd.co/">blacklivesmatters.carrd.co - Great resource to find more ways to help</a>

                    <div className="spacer"></div>
                    <Footer credit="Perry Grone on Unsplash" link="https://unsplash.com/photos/lbLgFFlADrY"></Footer>
                </div>
            </div >
        )
    }
}

export default Help;