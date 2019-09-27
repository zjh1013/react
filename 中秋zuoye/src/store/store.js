import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
let listReducer = function (state = [], action) {
    switch (action.type) {
        case "LIST_INIT":
            let newState = JSON.parse(JSON.stringify(state))
            // console.log(state)
            newState = action.data;
            return [...newState]

        default:
            return [...state]
    }

}

let reducer = combineReducers({
    listReducer
})

let store = createStore(reducer, applyMiddleware(thunk))

export default store