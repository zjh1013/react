import {createStore,combineReducers} from 'redux'

let listReducer = function(state=[],action){
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "ADD_SHOP":
            newState.push(action.data)
            return [...newState]
        case "CHANGE_NUM":
                newState.forEach((item,index)=>{
                    if(item.id===action.data.id){
                        item.num=action.data.num
                    }
                })
                return [...newState]
                default :
            return [...state]
    }
}
let reducer = combineReducers({
    listReducer
})

let store = createStore (reducer);
export default store