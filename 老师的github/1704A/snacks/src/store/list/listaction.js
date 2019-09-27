import axios from 'axios'
import '@/mock/index'
import {GET_INIT} from '../types'
export  const getInit = async (dispatch)=>{
   let res = await axios.get('/api/list');
   console.log(res);
   dispatch({type:GET_INIT,list:res.data})
}