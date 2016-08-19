import React from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import Sidebar from '../components/Sidebar';
import Gamecard from '../components/Gamecard';

const Dashboard = () => (
    <div className="Dashboard">
        <Header />
        <Sidebar />
        <Content>
            <h3>Choose the activity:</h3>
            <Gamecard />
            <Gamecard />
            <Gamecard />
        </Content>
    </div>
)

export default Dashboard
