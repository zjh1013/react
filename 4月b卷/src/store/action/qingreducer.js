
const listreducer = (state = [],actions)=>{
    switch(actions.type){
        case "ADD_CITY":
            let newState = JSON.parse(JSON.stringify(state))    
            newState = actions.data;
            console.log(state)
            
        return [...newState];
        
        default: return [...state]
        
    }
}


export default listreducer;