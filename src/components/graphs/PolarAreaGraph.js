import React from 'react';
import Chart from 'chart.js';

const PolarAreaGraph = React.createClass({
    createChart: function() {
        const data = this.props.data;

        var val = data.map(function(a) {return a.score;});

        var ctx = document.getElementById("polarAreaChar");
        var myChart = new Chart(ctx, {
            type: 'polarArea',
            data: {
                datasets: [{
                    data: [
                        11,
                        16,
                        7,
                        3,
                        14
                    ],
                    backgroundColor: [
                        "#FF6384",
                        "#4BC0C0",
                        "#FFCE56",
                        "#E7E9ED",
                        "#36A2EB"
                    ]
                }],
                labels: [
                    "Cards",
                    "Numbers",
                    "Binary",
                    "Pictures",
                    "Names & Faces"
                ]
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
        //document.getElementById("polarAreaChar").remove();
    },
    render: function() {
        return (
            <div className="chartContainer">
                <h3>{this.props.title}</h3>
                <canvas id="polarAreaChar"></canvas>
            </div>
        )
    }
});

export default PolarAreaGraph
