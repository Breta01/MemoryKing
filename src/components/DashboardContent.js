import React, {Component} from 'react';
import Gamecard from './Gamecard';
import Table from './Table';
import LineGraph from './graphs/LineGraph';
import PolarAreaGraph from './graphs/PolarAreaGraph';

class DashboardContent extends Component {
    render() {
        const props = this.props;
        const { stats } = props;
        return (
            <div>
                <h3>Latest Stats:</h3>
                <Table stats={stats} />
                <LineGraph title="Score" data={stats} />
                <PolarAreaGraph title="Games Played" data={stats} />
            </div>
        );
    }
}

export default DashboardContent;
