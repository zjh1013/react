import {createStore,combineReducers} from 'redux'

let listReducer = function(state=[],action){
    switch(action.type){
        case 'AA':
            let newState = JSON.parse(JSON.stringify(state))
            newState.push(action.data)
            console.log(newState)
            return [...newState]

        case 'BB':
                var aaa = state.filter((item,index)=>{
                    return action.id !== item.id
                });
                return aaa
        default :
            return [...state]
    }
}
let reducers = combineReducers({
    listReducer
})
let store = createStore(reducers)

export default store