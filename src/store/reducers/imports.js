import { createStore, combineReducers } from 'redux';

import landing from './landing';

export default createStore(
  combineReducers({
    landing
  })
);
