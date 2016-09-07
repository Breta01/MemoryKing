import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


// Css
import css from '../static/styles/main.scss';

// Containers import
import App from './components/App';
import Game from './containers/Game';
import DashboardContent from './components/DashboardContent';

// Router for switching pages
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import store, { history } from './store';


const routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                    <IndexRoute component={DashboardContent}></IndexRoute>
                    <Route path="/game" component={Game}></Route>
            </Route>
        </Router>
    </Provider>
)

// Render to ID app
ReactDOM.render(
    routes,
    document.getElementById('app')
);
