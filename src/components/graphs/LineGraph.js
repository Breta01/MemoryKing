import React from 'react';
import Chart from 'chart.js';
import moment from 'moment';

const LineGraph = React.createClass({
    createChart: function() {
        const data = this.props.data;

        var val = data.map(a => a.score);
        var labels = data.map(a =>
            moment(a.timestamp).format("MMM Do YY")
        );

        var ctx = document.getElementById("lineChart");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    data: val,
                    label: "Score",
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    borderJoinStyle: 'round',
                    pointBorderColor: "rgba(255,99,132,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(255,99,132,1)",
                    pointHoverBorderColor: "rgba(220,220,220,0.8)",
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
                responsive: true,
            }
        });
    },
    componentDidMount: function() {
        this.createChart();
    },
    componentDidUpdate: function() {
        this.createChart();
    },
    componentWillUnmount: function() {
        //document.getElementById("lineChart").remove();
    },
    render: function() {
        return (
            <div className="chartContainer">
                <h3>{this.props.title}</h3>
                <canvas id="lineChart"></canvas>
            </div>
        )
    }
});

export default LineGraph
