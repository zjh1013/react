import {ADD_LIST,DEL_LIST} from '../types'
const listreducer = (state = [], actions) => {
    switch (actions.type) {
        case ADD_LIST:
            state.push(actions.val);
            return  [...state]
            
        case DEL_LIST:
            state.splice(actions.ind, 1);
            return [...state];
        default: return [...state]
    }
}

export default listreducer;