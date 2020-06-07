import React from 'react';

import './css/WhitePrivilege.css';
import './style.css'
import Footer from './Footer';
import text from '../files/text.json';

class WhitePrivilege extends React.Component {
    render() {
        return (
            <div>
                <div className="header white-header">
                    <h1>White Privilege</h1>
                </div>
                <div className="container">
                    <div className="spacer"></div>
                    <h2>What IS White Privilege?</h2>
                    <p className="p">{text.white[2]}</p>
                    <p className="p">{text.white[3]}</p>
                    <p className="p">{text.white[4]}</p>
                    <p className="p">{text.white[5]}</p>
                    <ol>
                        <li>I can, if I wish, arrange to be in the company of people of my race most of the time.</li>
                        <li>I can avoid spending time with people whom I was trained to mistrust and who have learned to mistrust my kind or me.</li>
                        <li>If I should need to move, I can be pretty sure of renting or purchasing housing in an area which I can afford and in which I would want to live.</li>
                        <li>I can be pretty sure that my neighbors in such a location will be neutral or pleasant to me.</li>
                        <li>I can go shopping alone most of the time, pretty well assured that I will not be followed or harassed.</li>
                        <li>I can turn on the television or open to the front page of the paper and see people of my race widely represented.</li>
                        <li>When I am told about our national heritage or about "civilization," I am shown that people of mycolor made it what it is.</li>
                        <li>I can be sure that my children will be given curricular materials that testify to the existence of their race.</li>
                        <li>If I want to, I can be pretty sure of finding a publisher for this piece on white privilege.</li>
                        <li>I can be pretty sure of having my voice heard in a group in which I am the only member of my race.</li>
                        <li>I can be casual about whether or not to listen to another person's voice in a group in which s/he is the only member of his/her race.</li>
                        <li>I can go into a music shop and count on finding the music of my race represented, into a supermarket and find the staple foods which fit with my cultural traditions, into a hairdresser's shop and findsomeone who can cut my hair.</li>
                        <li>Whether I use checks, credit cards or cash, I can count on my skin color not to work against the appearance of financial reliability.</li>
                        <li>I can arrange to protect my children most of the time from people who might not like them.</li>
                        <li>I do not have to educate my children to be aware of systemic racism for their own daily physical protection.</li>
                        <li>I can be pretty sure that my children's teachers and employers will tolerate them if they fit school and workplace norms; my chief worries about them do not concern others' attitudes toward their race.</li>
                        <li>I can talk with my mouth full and not have people put this down to my color.</li>
                        <li>I can swear, or dress in second hand clothes, or not answer letters, without having people attribute these choices to the bad morals, the poverty or the illiteracy of my race.</li>
                        <li>I can speak in public to a powerful male group without putting my race on trial.</li>
                        <li>I can do well in a challenging situation without being called a credit to my race.</li>
                        <li>I am never asked to speak for all the people of my racial group.</li>
                        <li>I can remain oblivious of the language and customs of persons of color who constitute the world's majority without feeling in my culture any penalty for such oblivion.</li>
                        <li>I can criticize our government and talk about how much I fear its policies and behavior without being seen as a cultural outsider.</li>
                        <li>I can be pretty sure that if I ask to talk to the "person in charge", I will be facing a person of my race.</li>
                        <li>If a traffic cop pulls me over or if the IRS audits my tax return, I can be sure I haven't been singled out because of my race.</li>
                        <li>I can easily buy posters, postcards, picture books, greeting cards, dolls, toys and children's magazines featuring people of my race.</li>
                        <li>I can go home from most meetings of organizations I belong to feeling somewhat tied in, rather than isolated, out-of-place, outnumbered, unheard, held at a distance or feared.</li>
                        <li>I can be pretty sure that an argument with a colleague of another race is more likely to jeopardize her/his chances for advancement than to jeopardize mine.</li>
                        <li>I can be pretty sure that if I argue for the promotion of a person of another race, or a program centering on race, this is not likely to cost me heavily within my present setting, even if my colleagues disagree with me.</li>
                        <li>If I declare there is a racial issue at hand, or there isn't a racial issue at hand, my race will lend me more credibility for either position than a person of color will have.</li>
                        <li>I can choose to ignore developments in minority writing and minority activist programs, or disparage them, or learn from them, but in any case, I can find ways to be more or less protected from negative consequences of any of these choices.</li>
                        <li>My culture gives me little fear about ignoring the perspectives and powers of people of other races.</li>
                        <li>I am not made acutely aware that my shape, bearing or body odor will be taken as a reflection on myrace.</li>
                        <li>I can worry about racism without being seen as self-interested or self-seeking.</li>
                        <li>I can take a job with an affirmative action employer without having my co-workers on the job suspect that I got it because of my race.</li>
                        <li>If my day, week or year is going badly, I need not ask of each negative episode or situation whether it had racial overtones.</li>
                        <li>I can be pretty sure of finding people who would be willing to talk with me and advise me about my next steps, professionally.</li>
                        <li>I can think over many options, social, political, imaginative or professional, without asking whether a person of my race would be accepted or allowed to do what I want to do.</li>
                        <li>I can be late to a meeting without having the lateness reflect on my race.</li>
                        <li>I can choose public accommodation without fearing that people of my race cannot get in or will be mistreated in the places I have chosen.</li>
                        <li>I can be sure that if I need legal or medical help, my race will not work against me.</li>
                        <li>I can arrange my activities so that I will never have to experience feelings of rejection owing to myrace.</li>
                        <li>If I have low credibility as a leader I can be sure that my race is not the problem.</li>
                        <li>I can easily find academic courses and institutions which give attention only to people of my race.</li>
                        <li>I can expect figurative language and imagery in all of the arts to testify to experiences of my race.</li>
                        <li>I can choose a blemish cover or bandages in "flesh" color and have them more or less match my skin.</li>
                        <li>I can travel alone or with my spouse without expecting embarrassment or hostility in those who deal with us.</li>
                        <li>I have no difficulty finding neighborhoods where people approve of our household.</li>
                        <li>My children are given texts and classes which implicitly support our kind of family unit and do not turn them against my choice of domestic partnership.</li>
                        <li>I will feel welcomed and "normal" in the usual walks of public life, institutional and social.</li>

                    </ol>

                    <h2>Trump's Photoshoot</h2>
                    <div className="video">
                        <iframe className="nyt-vid" title="New York Times Video - Embed Player" frameborder="0" scrolling="no" allowfullscreen="true" marginheight="0" marginwidth="0" id="nyt_video_player" src="https://www.nytimes.com/video/players/offsite/index.html?videoId=100000007168615"></iframe>
                    </div>
                    <p className="p">{text.white[0]}</p>

                    <h2>Sources for this Section</h2>
                    <p className="citation">{text.white[7]}</p>
                    <p className="citation">{text.white[1]}</p>
                    <p className="citation">{text.white[6]}</p>
                    <Footer credit="WABE: Where ATL meets NPR" link="https://www.wabe.org/he-did-not-pray-fallout-grows-from-trump-s-photo-op-at-st-john-s-church/"></Footer>
                </div>
            </div>
        )
    }
}

export default WhitePrivilege;