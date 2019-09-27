import React from 'react'
// import Index from '../views/index/index'
// import Search from '../views/search/search';
// import Login from '../views/login/login';
// import my from '../views/my/my';
// import Home from '../views/index/home';
// import Find from '../views/index/find';
// import Frunt from '../views/index/frunt';
import Loadable from 'react-loadable'

function Loading(){
    return <div>loading...</div>
}

const Home = Loadable({
    loader:()=>import('../views/home/home'),
    loading:Loading
})
const List = Loadable({
    loader:()=>import('../views/list/list'),
    loading:Loading
})

const Login = Loadable({
    loader:()=>import('../views/login/login'),
    loading:Loading
})
const My = Loadable({
    loader:()=>import('../views/my/my'),
    loading:Loading
})
const Car = Loadable({
    loader:()=>import('../views/car/car'),
    loading:Loading
})
const routes = [
    {
        path:'/home',
        component:Home,
    },
    {
        path:'/list',
        component:List
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/'
    },
    {
        path:'/',
        redirect:'/index'
    },
    {
        path:'/my',
        component:My
    }
]


export default routes;