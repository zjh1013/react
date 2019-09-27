import React from 'react'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import exam from './exam/exam'
const reducer = combineReducers({
    exam
});

const store = createStore(reducer,applyMiddleware(thunk,logger));

export default store;