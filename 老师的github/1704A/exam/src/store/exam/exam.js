import {GET_INIT,CLICK_NEXT,CLICK_EXAM,SUBMIT} from '../types'
const examreduer = (state = {
    list:[],//所有的题目
    ind:0, //第几道题的索引
    length:0, //题目的长度
    curdata:{}, //当前的题
    startTime:0, //开始时间
    endTime:0 ,//结束时间
    con:'',
    count:0 //一共答对了多少道题
},actions)=>{
    switch(actions.type){
        case GET_INIT:{ //初始化
            state.list = actions.list;
            state.curdata = state.list[state.ind];
            state.length = actions.list.length;
            state.startTime = Date.now();
            return {
                ...state,
                list:[...state.list],
                curdata:{...state.curdata}
            }
        }
        case CLICK_NEXT:{ //点击下一题上一题
            let {cur} = actions;
            state.ind = cur;
            state.curdata = state.list[state.ind];
            return {
                ...state,
                curdata:{...state.curdata}
            }
        }
        case CLICK_EXAM:{
            let {id} = actions;
            let {ind} = state;
            state.list[ind].selected = id;
            state.ind++;
            if(state.ind >=  state.length -1){
                state.ind = state.length -1;
            }
            state.curdata = state.list[state.ind];
            return {
                ...state,
                curdata:{...state.curdata},
                list:[...state.list]
            }
        }
        case SUBMIT:{ //提交
            state.endTime = Date.now(); 
            let time = (state.endTime - state.startTime) / 1000; 
            let m = Math.floor(time / 60 % 60);
            let s = Math.floor(time % 60);
            state.con = '一共用时'+ m+'分'+s+'秒';
            state.count = state.list.filter(item => item.success == item.selected).length;
            return{
                ...state
            }
        }
        default: return{
            ...state,
            curdata:{...state.curdata},
            list:[...state.list]
        }
    }
}


export default examreduer;