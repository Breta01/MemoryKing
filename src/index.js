import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

// Css
import css from '../static/styles/main.scss';

// Containers import
import App from './containers/App';
import Dashboard from './containers/Dashboard';
import Game from './containers/Game';

// Router for switching pages
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//const store = configureStore();
//const history = syncHistoryWithStore(hashHistory, store);

const routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}></IndexRoute>
      <Route path="/game" component={Game}></Route>
    </Route>
)

// Render to ID app
ReactDOM.render(
    <Router history={hashHistory} routes={routes}/>,
    document.getElementById('app')
);
