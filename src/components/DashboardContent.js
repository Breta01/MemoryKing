import React, {Component} from 'react';
import Gamecard from './Gamecard';
import Table from './Table';
import LineGraph from './graphs/LineGraph';
import PolarAreaGraph from './graphs/PolarAreaGraph';
import moment from 'moment';

const DashboardContent = React.createClass({

	sort_by: function(field, reverse, primer) {
		var key = primer ?
			function(x) {return primer(x[field])} :
			function(x) {return x[field]};

		reverse = !reverse ? 1 : -1;

		return function (a, b) {
			return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
		};
	},

	dayStreak: function() {
		var diff;
		const { stats } = this.props;
		var index = stats.length;


		return index;
	},

	render: function() {
		const props = this.props;
		const { stats } = props;
		stats.sort(this.sort_by('timestamp', false));

		return (
			<div className="dashboard">
				<h1>Dashboard</h1>
				<div className="mdl-grid stat-boxs">
					<div className="mdl-cell mdl-cell--3-col">
						<h1>Day Streak</h1>
						<h2>{ this.dayStreak() }</h2>
						<p>Good job! See you tomorrow.</p>
					</div>
					<div className="mdl-cell mdl-cell--3-col">
						<h1>Some Text</h1>
						<h2>200</h2>
					</div>
					<div className="mdl-cell mdl-cell--3-col">
						<h1>Bla Bla</h1>
						<h2>300</h2>
					</div>
					<div className="mdl-cell mdl-cell--3-col">
						<h1>Another Info</h1>
						<h2>400</h2>
					</div>
				</div>
				<div className="mdl-grid">
					<div className="mdl-cell mdl-cell--8-col">
						<h3>Score</h3>
						<LineGraph data={stats.slice(0, 30)} />
					</div>
					<div className="mdl-cell mdl-cell--4-col">
						<Table stats={stats.slice(-9)} />
					</div>
				</div>
				<div className="mdl-grid">
					<div className="mdl-cell mdl-cell--4-col">
						<PolarAreaGraph title="Games Played" data={stats} />
					</div>
					<div className="mdl-cell mdl-cell--4-col">
					</div>
					<div className="mdl-cell mdl-cell--4-col">
					</div>
				</div>
			</div>
		);
	}
});

export default DashboardContent;
