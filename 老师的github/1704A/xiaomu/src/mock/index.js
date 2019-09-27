import Mock from 'mockjs'
Mock.mock('/api/list',{
    'list|10-20':[
        {
            'img':'@image(100x100,"#f0f")',
            'title':'@ctitle',
            'price|10-20':1,
            'count':1,
            'id|+1':1
        }
    ]
})