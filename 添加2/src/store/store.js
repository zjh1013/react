import {createStore,combineReducers} from 'redux'
import React from 'react'

let listReducer = function(state=[],action){
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "AAA":

            newState.push(action.data)

            return [...newState]

            case "BBB":
                    let {name,tit,index} = action.data
                    newState.splice(index,1,{name,tit})

                    return[...newState]

            default : return[...state]
    }
}

let Reducer = combineReducers({
    listReducer
})
let store = createStore(Reducer)

export default store




//就散  干嘛听苦情歌多浪漫   在浪漫都被超三    他明白  他明白我给不起   于是转身向大海走去   形同挚爱    让我无法去睡觉  喝的烂醉   每个酒醒时分 也逐渐跟着横撑  拦
//看着这个  天真的我自己   于是转身向山里走去
//我给不起  