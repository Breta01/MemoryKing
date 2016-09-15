import React from 'react';
import { Link } from 'react-router';
import gameNumbers from './Numbers';

const NumbersGame = React.createClass({
    render() {
        return (
            <div className="game">
                <h1>Welcome to the Number:</h1>
                <div id="gameContent"></div>
                <div id="gameControler">
                    <a id="gameSubmit">Submit</a>
                </div>
            </div>
        )
    },
    componentDidMount: function() {
        gameNumbers.start(5);
    }
});

export default NumbersGame
