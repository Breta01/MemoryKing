import React from 'react';
import { Link } from 'react-router';
import gameNumbers from './Numbers';

const NumbersGame = React.createClass({
    render() {
        return (
            <div className="game">
                <h1 id="actualNumber">..</h1>

				<div id="gameController">
					<h1 id="timer">
						<span id="hour"></span>
						<span id="min">00</span>:
						<span id="sec">00</span>.
						<span id="hsec">00</span>
					</h1>
					<a id="gameSubmit">Continue</a>
				</div>

                <div id="gameContent">
					<table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
						<tbody id="gameTable">
						</tbody>
					</table>
				</div>
            </div>
        )
    },

	componentDidMount: function() {
        gameNumbers.start(5);
		window.addEventListener("keyup", gameNumbers.changeFocus);
    },

	compenentWillUnmount: function() {
		window.removeEventListener("keyup", gameNumbers.changeFocus);
		gameNumbers.removeTimer();
	}
});

export default NumbersGame
