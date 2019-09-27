import {ADD_CITY} from '../types'
const cityreducer = (state = {},actions)=>{
    console.log(actions);
    switch(actions.type){
        case ADD_CITY:
            state = actions.data;
        return {...state};
        
        default: return {...state}
        
    }
}


export default cityreducer;