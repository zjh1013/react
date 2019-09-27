
import Loadable from 'react-loadable'
import React from 'react'
function Loading(){
    return <div>
        loading...
    </div>
}

const Index = Loadable({
    loader:()=> import('../views/index/index'),
    loading:Loading
})
const Login = Loadable({
    loader:()=> import('../views/login/login'),
    loading:Loading
})
const Detail = Loadable({
    loader:()=> import('../views/detail/detail'),
    loading:Loading
})
const Home = Loadable({
    loader:()=> import('../views/index/home/home'),
    loading:Loading
})
const List = Loadable({
    loader:()=> import('../views/index/list/list'),
    loading:Loading
})
const Car = Loadable({
    loader:()=> import('../views/index/car/car'),
    loading:Loading
})
const My = Loadable({
    loader:()=> import('../views/index/my/my'),
    loading:Loading
})
const routes = [
    {
        path:'/index',
        component:Index,
        children:[
            {
                path:'/index/home',
                component:Home
            },
            {
                path:'/index/list',
                component:List
            }
            ,{
                path:'/index/car',
                component:Car
            },{
                path:'/index/my',
                component:My
            },
            {
                path:'/index',
                redirect:'/index/home'
            }
        ]
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/detail',
        component:Detail
    },
    {
        path:'/',
        redirect:'/index'
    }
]


export default routes;