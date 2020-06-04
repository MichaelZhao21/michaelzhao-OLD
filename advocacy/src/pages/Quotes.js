import React from 'react';
import data from '../files/quotes.json';

class Quote extends React.Component {
    render() {
        const choice = Math.round(Math.random() * (data.quotes.length - 1));
        return (
            <div>
                <h2 className="quote">{data.quotes[choice][0]}</h2>
                <p className="mid">-{data.quotes[choice][1]}</p>
            </div>
        )
    }
}

export default Quote;