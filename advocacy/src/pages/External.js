import React from 'react';

import './css/External.css';
import './style.css'
import Footer from './Footer';

class External extends React.Component {
    render() {
        return (
            <div>
                <div className="header external-header">
                    <h1>External Resources</h1>
                </div>
                <div className="container">
                    <div className="spacer"></div>
                    <p>This section will just be a compilation of good social media posts to read/watch/listen to. Again, remember that there is ALWAYS a bias in any source of information, especially through social media. However, when taken with a grain of salt, the information from social media can be extremely precious and helps with the spread of activism and change.</p>

                    <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@goddessofegypt/video/6832014476825414918" data-video-id="6832014476825414918">
                        <section>
                            <a target="_blank" title="@goddessofegypt" href="https://www.tiktok.com/@goddessofegypt">@goddessofegypt</a>
                            <p>
                                yes, they were all black. SAY their names. LEARN their stories. FIGHT for a change. <a title="blmmovement" target="_blank" href="https://www.tiktok.com/tag/blmmovement">##blmmovement</a> <a title="blacklivesmatter" target="_blank" href="https://www.tiktok.com/tag/blacklivesmatter">##blacklivesmatter</a> <a title="heard" target="_blank" href="https://www.tiktok.com/tag/heard">##heard</a>
                            </p>
                            <a target="_blank" title="♬ Black Lives will be heard - goddessofegypt" href="https://www.tiktok.com/music/Black-Lives-will-be-heard-6832014470328486662">♬ Black Lives will be heard - goddessofegypt</a>
                        </section>
                    </blockquote>

                    <Footer credit="dole777 on Unsplash" link="https://unsplash.com/photos/EQSPI11rf68"></Footer>
                </div>
            </div>
        )
    }
}

export default External;