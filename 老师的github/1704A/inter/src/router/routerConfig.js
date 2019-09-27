import Loadable from 'react-loadable'
import React from 'react'

function Loading(){
    return <div>loading....</div>
}


const City = Loadable({
    loader: ()=> import('../views/city/city'),
    loading:Loading
})

const Login = Loadable({
    loader: ()=> import('../views/login/login'),
    loading:Loading
})

const My = Loadable({
    loader: ()=> import('../views/my/my'),
    loading:Loading
})
const Order = Loadable({
    loader: ()=> import('../views/order/order'),
    loading:Loading
})
const Regester = Loadable({
    loader: ()=> import('../views/regester/regester'),
    loading:Loading
})

const Storelist = Loadable({
    loader: ()=> import('../views/city/storelist'),
    loading:Loading
})


const routes = [
    {
        path:'/city',
        component:City
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/my',
        component:My
    },
    {
        path:'/order',
        component:Order
    },
    {
        path:'/regester',
        component:Regester
    },
    {
        path:'/storelist/:id',
        component:Storelist
    },
    {
        path:'/',
        redirect:'/city'
    }
]


export default routes;