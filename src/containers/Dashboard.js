import React, { PropTypes } from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import Sidebar from '../components/Sidebar';
import Gamecard from '../components/Gamecard';
import Table from '../components/Table';

const Dashboard = ({ stats }) => (
    <div className="Dashboard">
        <Header />
        <Sidebar />
        <Content>
            <form id="new-todo-form" method="POST" action="#">
                <input type="text" name="new-todo" id="new-todo" placeholder="Enter a todo item..." required></input>
            </form>

            <h3>Choose the activity:</h3>
                {stats.map(stat => <li key={stat.key}>{stat.author}</li>)}
            <Gamecard />
        </Content>
    </div>
)

Dashboard.propTypes = {
  stats: PropTypes.array
}

export default Dashboard
