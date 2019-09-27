import Mock from 'mockjs'
import city from './city.json'



// {
//     "A":[{},{},{},{},{},{}],
//     "B":[{},{},{},{},{},{}],
//     "C":[{},{},{},{},{},{}],
//     "D":[{},{},{},{},{},{}],
// }

let data = {};

let title=[...new Set(city.data.map(item=>item.Spelling.substr(0,1)))];

title.forEach(item=>{
    data[item] = city.data.filter(item1=>item1.Spelling.substr(0,1)===item)
})


// console.log(data)

Mock.mock('/api/data',data)




// for(var i=0;i<pushArr.length;i++) {

//     obj[i] = pushArr[i];
  
//    }
  
//    obj.length = pushArr.length;


Mock.mock('/api/shouye',{
    "list|15":[
        {
            "title":"@ctitle",
            // "img":"@image/100x100",
            "price|20-66":1
        }
    ]
})

