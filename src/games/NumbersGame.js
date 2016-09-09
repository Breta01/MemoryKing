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
        // Upgrading all Material Design Lite upgradable components
        // Only important for dynamicaly loading components
        gameNumbers.start(5);
    }
});

export default NumbersGame
