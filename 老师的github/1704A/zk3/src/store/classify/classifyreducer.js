import {ADD} from '../types'
const classify = (state={list:[]},actions)=>{
    console.log(actions);
    switch(actions.type){
       case ADD:{
           state.list.push(actions.obj);
           return {
               ...state,
               list:[...state.list]
           }
       }
       default: return{
           ...state
       }
       
    }
}

export default classify;