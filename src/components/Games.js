import React from 'react';
import Gamecard from './Gamecard';

var defaultGames = [
	{
		title: "Numbers",
		desc: "Description of Numbers game",
		image: "./src/games/img/cards.jpg"
	}, {
		title: "Cards",
		desc: "Description of Cards game",
		image: "./src/games/img/cards.jpg"
	}
];

var games = [];

const Games = React.createClass({
	render: function() {
		// @TODO add Links to how to and games

		games = JSON.parse(localStorage.getItem("games"));
		if (games === null) {
			console.log("games is null");
			this.resetGames();
		}

		return (
			<div>
				<h1>Games</h1>
				<div className="mdl-grid">
				{ games.map((game, i) =>
					<div key={i} className="mdl-cell mdl-cell--12-col-phone mdl-cell--4-col-desktop">
						<Gamecard key={i} title={game.title} description={game.desc} image={game.image} />
					</div>
				)}
				</div>
				 <button onClick={this.resetGames}>Reset Games</button>
			</div>
		);
	},

	resetGames: function() {
		console.log("Resetting games");
		localStorage.setItem("games", JSON.stringify(defaultGames));
		games = defaultGames;
		this.forceUpdate();
	}
});

export default Games;
