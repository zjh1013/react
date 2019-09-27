import axios from 'axios'
export function getList (url) {
    return function (next){
        axios.get(url).then((res)=>{
            next({type:"LIST",data:res.data.list})
        })
    }
}