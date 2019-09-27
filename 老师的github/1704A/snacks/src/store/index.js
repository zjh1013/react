import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import list from './list/listreducer'
import shop from './shop/shopreducer'
const reducer = combineReducers({
    list,
    shop
});
const store = createStore(reducer,applyMiddleware(thunk,logger))

export default store;