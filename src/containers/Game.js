import React from 'react';
import { Link } from 'react-router';
import Header from '../components/Header';
import Content from '../components/Content';
import Sidebar from '../components/Sidebar';

const Game = () => (
    <div className="game">
        <h1>Welcome to the game</h1>
        <Link to="/">Go to Dashboard</Link>
    </div>
)

export default Game
