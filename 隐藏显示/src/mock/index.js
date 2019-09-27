import Mock from 'mockjs'

Mock.mock('/api/list',{
    'list|5':[
        {
            'title|2-3':"@ctitle"
        }
    ]
})