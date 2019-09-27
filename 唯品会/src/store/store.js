import {createStore,combineReducers} from 'redux'
let ShopReducer = function(state=[],action){
    let newState = JSON.parse(JSON.stringify(state))
        switch(action.type){
            case 'SHOP_LIST':
                
                newState.push(action.data);
                // console.log(newState)
            return [...newState];

            case 'CHANGE_NUM':
                    newState.forEach((item,index)=>{
                        if(item.id===action.data.id){
                            item.num=action.data.num
                        }
                    })
                    return [...newState]
                default:
            return [...state]
        }
}
let Reducers = combineReducers({ShopReducer})

let store = createStore(Reducers)

export default store