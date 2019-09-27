import Mock from 'mockjs'
import city from './city.json'
let data = {
    
};
console.log(city);
const title = [...new Set(city.data.map(item => item.Spelling.substr(0,1)))];
console.log(title);

title.forEach(item => {
    data[item] = city.data.filter(item1 => item1.Spelling.substr(0,1) === item);
})
console.log(data);


Mock.mock('/api/list',{
    'list|10-20':[
        {
            'img':'@image(100x100,#f0f)',
            'title':'@ctitle',
            'price|10-20':1,
            'id|+1':1
        }
    ]
});


Mock.mock('/api/city',data);

Mock.mock('/api/login',({body})=>{
    let {name,pwd} = JSON.parse(body);
    if(name == 'zs' && pwd == '123'){
        return {
            code:1,
            mes:'成功'
        }
    } else{
        return {
            code:0,
            mes:'失败'
        }
    }
});