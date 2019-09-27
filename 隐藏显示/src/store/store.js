import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
let listReducer = function (state=[],action){
    switch(action.type){
        case "LIST" :
            let newState =JSON.parse(JSON.stringify(state)) 
            newState=action.data
            console.log(newState)
            
        return [...newState]

        default :
        return[...state]
    }
}

let Reducer = combineReducers({
    listReducer
})
let store = createStore(Reducer,applyMiddleware(thunk))

export default store
