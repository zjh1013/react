import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import classify from './classify/classifyreducer'
const reducer = combineReducers({
    classify
});
const store = createStore(reducer,applyMiddleware(thunk,logger))

export default store;