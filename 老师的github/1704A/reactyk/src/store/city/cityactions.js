import axios from 'axios'
import {ADD_CITY} from '../types'
//传参的时候
export const getList = (id)=> async (dispatch) => {
    console.log(909090,id);
   let res = await axios.get('/api/city')
   dispatch({type:ADD_CITY,data:res.data})
}


//不传参数的时候
// export const getList =  async (dispatch) => {
//     console.log(909090,id);
//    let res = await axios.get('/api/city')
//    dispatch({type:ADD_CITY,data:res.data})
// }