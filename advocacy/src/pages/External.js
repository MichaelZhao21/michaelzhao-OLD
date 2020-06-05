import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

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

                    <div className="flex-div">
                        <InstagramEmbed className="inst inst-div" url="https://instagr.am/p/CAzwncfFm7G" maxWidth={1000} hideCaption={true} containerTagName='div'></InstagramEmbed>
                        <InstagramEmbed className="inst inst-div" url="https://instagr.am/p/CA05CQlDVFZ" maxWidth={1000} hideCaption={true} containerTagName='div'></InstagramEmbed>
                    </div>

                    <div className="flex-div">
                        <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@goddessofegypt/video/6832014476825414918" data-video-id="6832014476825414918">
                            <section>
                                <a target="_blank" title="@goddessofegypt" href="https://www.tiktok.com/@goddessofegypt">@goddessofegypt</a>
                                <p>
                                    yes, they were all black. SAY their names. LEARN their stories. FIGHT for a change. <a title="blmmovement" target="_blank" href="https://www.tiktok.com/tag/blmmovement">##blmmovement</a> <a title="blacklivesmatter" target="_blank" href="https://www.tiktok.com/tag/blacklivesmatter">##blacklivesmatter</a> <a title="heard" target="_blank" href="https://www.tiktok.com/tag/heard">##heard</a>
                                </p>
                                <a target="_blank" title="♬ Black Lives will be heard - goddessofegypt" href="https://www.tiktok.com/music/Black-Lives-will-be-heard-6832014470328486662">♬ Black Lives will be heard - goddessofegypt</a>
                            </section>
                        </blockquote>
                        <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@trxll.zach/video/6831975090603707654" data-video-id="6831975090603707654" >
                            <section>
                                <a target="_blank" title="@trxll.zach" href="https://www.tiktok.com/@trxll.zach">@trxll.zach</a>
                                <p>it was my brothers but i feel like it like you hurt me 🙏🏼✊🏽 <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp">##fyp</a> <a title="blm" target="_blank" href="https://www.tiktok.com/tag/blm">##blm</a> <a title="icantbreathe" target="_blank" href="https://www.tiktok.com/tag/icantbreathe">##icantbreathe</a> <a title="peace" target="_blank" href="https://www.tiktok.com/tag/peace">##peace</a> <a title="equality" target="_blank" href="https://www.tiktok.com/tag/equality">##equality</a> <a title="xyzbca" target="_blank" href="https://www.tiktok.com/tag/xyzbca">##xyzbca</a> <a title="sad" target="_blank" href="https://www.tiktok.com/tag/sad">##sad</a></p>
                                <a target="_blank" title="♬ original sound - trxll.zach" href="https://www.tiktok.com/music/original-sound-6831975095162964742">♬ original sound - trxll.zach</a>
                            </section>
                        </blockquote>
                    </div>

                    <Footer credit="dole777 on Unsplash" link="https://unsplash.com/photos/EQSPI11rf68"></Footer>
                </div>
            </div>
        )
    }
}

export default External;