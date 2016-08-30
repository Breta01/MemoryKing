import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


// Css
import css from '../static/styles/main.scss';

// Containers import
import App from './components/App';
import Dashboard from './containers/Dashboard';
import Game from './containers/Game';

// Router for switching pages
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import store, { history } from './store';

//const store = configureStore();
//const history = syncHistoryWithStore(hashHistory, store);

const routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Dashboard}></IndexRoute>
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
