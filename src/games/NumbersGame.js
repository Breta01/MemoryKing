import React from 'react';
import { Link } from 'react-router';
import gameNumbers from './Numbers';

const NumbersGame = React.createClass({
    render() {
        return (
            <div className="game">
                <h1>Numbers:</h1>
                <div id="gameContent">
					<table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
						<tbody id="gameTable">
						</tbody>
					</table>
				</div>
                <div id="gameControler">
                    <a id="gameSubmit">Continue</a>
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
	}
});

export default NumbersGame
