import { ADD_SHOP,CHECK,ALL_CHECK,CHANGE_COUNT } from '../types'

const all = (arr)=>{
    return arr.every(item => item.checked)
}

const sum = (arr)=>{ //计算总价
    return arr.reduce((prev,cur)=>{
        // if(cur.checked){
        //     cur
        // }
        return prev + (cur.checked ? cur.count * cur.price : 0)
    },0);
}

const shopreducer = (state = { buyList: [],allCheck:false,sumPrice:0 }, actions) => {
    switch (actions.type) {
        case ADD_SHOP: //添加购物车
            {

                actions.obj.count++;
                let ind = state.buyList.findIndex(item => item.id === actions.obj.id);
                if(ind === -1){
                    actions.obj.checked = false;
                    state.buyList.push(actions.obj);
                }
                
                return {
                    ...state,
                    buyList: [...state.buyList]
                }
            }
        case CHECK: //单选
            {

                let {ind,flag} = actions;
                state.buyList[ind].checked = flag;
                state.allCheck = all(state.buyList)
                state.sumPrice = sum(state.buyList);
                return {
                    ...state,
                    buyList: [...state.buyList]
                }
            }
            
            case ALL_CHECK: //全选
            {
                state.allCheck = actions.flag;
                state.buyList.forEach(item => item.checked = state.allCheck);
                state.sumPrice = sum(state.buyList);
                return {
                    ...state,
                    buyList: [...state.buyList]
                }
            }
            case CHANGE_COUNT: //数量加减
            {
                let {ind,count} = actions;
                state.buyList[ind].count = count;
                state.sumPrice = sum(state.buyList);
            return {
                ...state,
                buyList: [...state.buyList]
            }
        }
        default:
            return {
                ...state,
                buyList: [...state.buyList]
            }
    }
}

export default shopreducer;