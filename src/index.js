import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import '../static/styles/main.scss';
import App from './components/App';

// Render to ID app
ReactDOM.render(
    <App />, document.getElementById('app')
);
