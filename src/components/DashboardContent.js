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

	// @TODO Needs testing
	dayStreak: function() {
		const { stats } = this.props;
		var i = stats.length - 1;
		var streak = 0;
		var trainToday = 1;

		if (i != -1) {
			trainToday = moment(new Date().getTime()).diff(moment(stats[i].timestamp),
				'days', true);
			var diff = moment(stats[i].timestamp).diff(moment(stats[i-1].timestamp),
				'days', false);
			console.log(diff);
			while (diff < 2 && i > 1) {
				streak += diff;
				i--;
				diff = moment(stats[i].timestamp).diff(moment(stats[i-1].timestamp),
					'days', false);
				console.log(diff);
			}

			if (diff < 2 && i < 2) {
				streak += diff;
			}
		}
		return (trainToday < 1) ? streak + 1 : streak;
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
						<h2>{this.dayStreak()}</h2>
						<p>Good job! See you tomorrow.</p>
					</div>
					<div className="mdl-cell mdl-cell--3-col">
						<h1>Best Score</h1>
						<h2>300</h2>
					</div>
					<div className="mdl-cell mdl-cell--3-col">
						<h1>Score Progress</h1>
						<h2>20 %</h2>
						<p>Your score increased by 20 %</p>
					</div>
					<div className="mdl-cell mdl-cell--3-col">
						<h1>Average Speed</h1>
						<h2>100 s</h2>
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
