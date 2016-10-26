import React from 'react';
import Chart from 'chart.js';
import moment from 'moment';

const LineGraph = React.createClass({
	createChart: function() {
		const data = this.props.data;

		var val = data.map(a => a.score);
		var labels = data.map(a =>
			moment(a.timestamp).format("MMM Do")
		);

		var ctx = document.getElementById("lineChart");
		var myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: labels,
				datasets: [{
					data: val,
					label: "Score",
					backgroundColor: "rgba(0,144,217,0.2)",
					borderColor: "rgba(0,144,217,1)",
					borderJoinStyle: 'round',
					pointBorderColor: "rgba(0,144,217,1)",
					pointBackgroundColor: "#fff",
					pointBorderWidth: 2,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: "rgba(0,144,217,1)",
					pointHoverBorderColor: "rgba(220,220,220,0.6)",
					pointHoverBorderWidth: 2,
					pointRadius: 3,
					borderWidth: 2,
					pointHitRadius: 10,
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				},
				legend: {
					display: false
				},
				responsive: true,
			}
		});
	},
	componentDidMount: function() {
		this.createChart();
	},
	componentDidUpdate: function() {
		// @TODO Try updating chart instead
		this.createChart();
	},
	componentWillUnmount: function() {
		//document.getElementById("lineChart").remove();
	},
	render: function() {
		return (
			<div className="chartContainer">
				<canvas id="lineChart"></canvas>
			</div>
		)
	}
});

export default LineGraph
