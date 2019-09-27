import {ADD,DEL} from '../types'
const countreducer = (state = 1, actions) => {
    switch (actions.type) {
        case ADD: state++;
            return state;
        case DEL: state--;
            return state;
        default: return state;
    }
}

export default countreducer;