import axios from 'axios'
import '../../mock/index'
import {GET_INIT} from '../types'

 export const getList = (dispatch)=>{
     axios.get('/api/exam').then((res)=>{
        console.log(res);
        dispatch({type:GET_INIT,list:res.data});
     });
 }

