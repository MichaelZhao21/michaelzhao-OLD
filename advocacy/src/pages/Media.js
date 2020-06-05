import React from 'react';

import './style.css';
import './css/Media.css';
import Footer from './Footer';
import text from '../files/text.json';

class Media extends React.Component {
    render() {
        return (
            <div>
                <div className="header media-header">
                    <h1>Social and Commerical Media</h1>
                </div>
                <div className="container">
                    <h2>Information Disparity between Commercial and Social Media</h2>
                    <p className="p">{text.media[0]}</p>
                    <p className="p">{text.media[1]}</p>
                    
                    <h2>Police Kneeling vs Police Violence</h2>
                    <table className="tab">
                        <tr>
                            <th>Commercial Media Police Propaganda</th>
                            <th>Truth From Social Media Outlets</th>
                        </tr>
                        <tr>
                            <td>
                                <div className="tab-div">
                                    <a className="inline-link tab-link" href="https://www.newsday.com/news/new-york/nypd-chief-of-department-terrence-monahan-1.45201889">News Day - New York Officers Kneel</a>
                                    <a className="inline-link tab-link" href="https://abc7ny.com/terence-monahan-chief-of-department-support-good-news/6225766/">ABC NY - New York Officers Kneel</a>
                                    <a className="inline-link tab-link" href="https://nypost.com/2020/05/31/nypd-cops-take-a-knee-beside-protesters-in-solidarity-in-queens/">NY Post - New York Officers Kneel</a>
                                    <a className="inline-link tab-link" href="https://www.cnn.com/2020/05/31/us/nypd-officers-kneel-with-protesters-trnd/index.html">CNN - New York Officers Kneel</a>
                                    <a className="inline-link tab-link" href="https://www.wtsp.com/article/news/regional/florida/orange-county-sheriff-orlando-police-chief-take-a-knee-with-protesters/67-ab1273a0-df10-43d4-b580-b05b7ac678ea">WTSP - Orange County Officers Kneel</a>
                                    <a className="inline-link tab-link" href="https://www.youtube.com/watch?v=mcIeNUsyn3o">KWG News - Portland Police Kneel</a>
                                </div>
                            </td>
                            <td>
                                <div className="tab-div">
                                    <a className="inline-link tab-link" href="https://twitter.com/drivenbyboredom/status/1267263490009546753?s=20">Twitter - NYPD attacked protesters for no reason</a>
                                    <a className="inline-link tab-link" href="https://twitter.com/karaokecomputer/status/1267393445603115008?s=20">Twitter - Series of police kneeling and then immediately attacking protesters</a>
                                    <a className="inline-link tab-link" href="https://twitter.com/karaokecomputer/status/1267548591184216064?s=20">Twitter - More reports of sudden police violence after "peace"</a>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <Footer credit="Filip Mishevski on Unsplash" link="https://unsplash.com/photos/c5QdMcuFlgY"></Footer>
                </div>
            </div>
        )
    }
}

export default Media;