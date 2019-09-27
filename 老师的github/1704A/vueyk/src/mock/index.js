import Mock from 'mockjs'
import banner from './banner.json'
import title from './list.json'
import list from './data.json'
Mock.mock('/api/banner',{
    'list':banner
})

Mock.mock('/api/title',{
    'list':title
})

Mock.mock('/api/list',{
    'list':list
});


Mock.mock('/api/login',({body})=>{
    const {name,pwd} = JSON.parse(body);
    if(name === 'zs' && pwd === '123'){
        return {
            code:1,
            mes:'成功'
        }
    } else {
        return{
            code:0,
            mes:'失败'
        }
    }
});