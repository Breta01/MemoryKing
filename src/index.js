import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


// Css
import css from '../static/styles/main.scss';

// Containers import
import App from './components/App';
import DashboardContent from './components/DashboardContent';

// Games
import NumbersGame from './games/NumbersGame';

// Router for switching pages
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import store, { history } from './store';


const routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                    <IndexRoute component={DashboardContent}></IndexRoute>
                    <Route path="/game" component={NumbersGame}></Route>
            </Route>
        </Router>
    </Provider>
)

// Render to ID app
ReactDOM.render(
    routes,
    document.getElementById('app')
);
