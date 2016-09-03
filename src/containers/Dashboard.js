import React, {Component} from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import Sidebar from '../components/Sidebar';
import Gamecard from '../components/Gamecard';
import Table from '../components/Table';

class Dashboard extends Component {
    render() {
        const props = this.props;
        const { stats } = props;
        return (
            <div className="Dashboard">
                <Header />
                <Sidebar />
                <Content>

                    <form id="new-todo-form" method="POST" action="#">
                        <input type="text" name="new-todo" id="new-todo" placeholder="Enter a text..." required></input>
                    </form>

                    <h3>Choose the activity:</h3>
                        {stats.map((stat, i) => <Table {...this.props} stat={stat} key={i}/>)}
                    <Gamecard />
                </Content>
            </div>
        );
    }
}

export default Dashboard;
