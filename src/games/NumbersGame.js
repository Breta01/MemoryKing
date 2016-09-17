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
    },

	handleKeyDown: function(e) {
		var ENTER = 13;
		console.log("Key: " + e.keyCode);
		if( e.keyCode == ENTER ) {
			console.log("ENTER pressd");
		}
	},

	handleFocus: function(id) {
		var child = this.refs['child' + id];
		if (!child) return;
		var input = child.refs.input;
		input.getDOMNode().focus();
	}
});

export default NumbersGame
