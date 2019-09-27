import {GET_INIT} from '../types'
const listreducer = (state = {list:[]},actions)=>{
    switch(actions.type){
        case GET_INIT: 
          state.list = actions.list;
        return {
            ...state,
            list:[...state.list]
        }

        default: return {
            ...state,
            list:[...state.list]
        }
    }
}


export default listreducer