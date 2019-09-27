import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
// const reducer = (state = { count: 1, list: [] }, actions) => {
//     console.log(state, actions);
//     // JSON.parse(JSON.stringify(state))
//     switch (actions.type) { 
//         case 'ADD': state.count++;
//             return { ...state };
//         case 'DEL': state.count--;
//             return { ...state };
//         case 'ADD_LIST':
//             state.list.push(actions.val);
//             return {
//                 ...state,
//                 list: [...state.list]
//             }
//         case 'DEL_LIST':
//             state.list.splice(actions.ind,1);
//             return {
//                 ...state,
//                 list: [...state.list]
//             }
//         default: return { ...state };
//     }
// }

import count from './count/countreducer'
import list from './list/listreducer'
import city from './city/cityreducer'
const reducer = combineReducers({
    count,
    list,
    city
})

const store = createStore(reducer,applyMiddleware(thunk,logger));

window.store = store;


export default store;