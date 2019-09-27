// import axios from 'axios'
// import './qingreducer.js'
// export const getList = (dispatch) =>{
//     axios.get('/api/shouye').then((res) => {
//             dispatch({type:'ADD_CITY',data:res.data})
//             console.log(res.data)
            
//         })
// }




import axios from 'axios';
export function getList (url){
    return function (next){
            axios.get(url).then((res)=>{
            next({type:'ADD_CITY',data:res.data})
        })
  
        
    }
}

