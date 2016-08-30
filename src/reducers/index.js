import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import stats from './stats';

const rootReducer = combineReducers({stats, routing: routerReducer});

export default rootReducer;
