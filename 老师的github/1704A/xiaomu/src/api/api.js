import axios from '@/utils/http.js'

//登录接口
export const login = (params) =>  axios.post('/api/login',params);
//注册接口
export const register = (params) =>  axios.post('/api/register',params);
//投票列表
export const  allVote = () =>  axios.get('/api/vote/allVote');
//发布投票
export const  newVote = (params) =>  axios.post('/api/vote/newvote',params);
//获取所有小组
export const  grouplist = () =>  axios.get('/api/group/list');




// function login (params){
//     return axios.post('/')
// }