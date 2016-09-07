import React, {Component} from 'react';
import Gamecard from './Gamecard';
import Table from './Table';

class DashboardContent extends Component {
    render() {
        const props = this.props;
        const { stats } = props;
        return (
            <div>
                <form id="new-todo-form" method="POST" action="#">
                    <input type="text" name="new-todo" id="new-todo" placeholder="Enter a text..." required></input>
                </form>

                <h3>Choose the activity:</h3>
                    {stats.map((stat, i) => <Table {...this.props} stat={stat} key={i}/>)}
                <Gamecard />
            </div>
        );
    }
}

export default DashboardContent;
