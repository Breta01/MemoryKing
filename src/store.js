import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';

import rootReducer from './reducers/index';

// @TODO data importing from database (https://learnredux.com/view/G1CSA5AyDvI 5:00)

// create default object (@TODO use imported data)
const defaultState = {

};

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(hashHistory, store);

export default store;
