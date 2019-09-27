import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
let listreducer = function (state = [], action) {
    switch (action.type) {
        case 'ADD_CITY':
            let newState = JSON.parse(JSON.stringify(state))
            newState = action.data
            console.log(newState)
            return [...newState]
        default:
            return [...state]

    }
}

let reducer = combineReducers({
    listreducer
})
let store = createStore(reducer, applyMiddleware(thunk))

export default store

