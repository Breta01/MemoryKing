import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';
import memokingDB from './db';
import { loadStats } from './actions/actionCreators';

import rootReducer from './reducers/index';

// @TODO set some default date
var stats;

// create default object (@TODO use imported data)
const defaultState = {
    stats
};

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(hashHistory, store);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Loading data from memoKing database
memokingDB.open(refreshStats);

// Update the list of todo items.
function refreshStats() {
    memokingDB.fetchStats(function(loadedStats) {
        store.dispatch(loadStats(loadedStats));
    });
}

export default store;
