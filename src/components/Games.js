import React from 'react';
import Gamecard from './Gamecard';

const Games = React.createClass({
	render: function() {
		// @TODO Load json file: "../games/games.json"
		// and map it to the gamecards
		// add Links to how to and games
		return (
			<div>
				<h1>Games</h1>
				<Gamecard title="Number" description="Bla Bla Bla Bla" image="./src/games/img/cards.jpg" />
			</div>
		);
	}
});

export default Games;
