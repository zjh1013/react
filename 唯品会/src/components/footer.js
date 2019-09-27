import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class footer extends Component {
    render() {
        return (
            <footer className='tab'>
                <NavLink to='/shouye' activeClassName='ac'>首页</NavLink>
                <NavLink to='/fenlei' activeClassName='ac'>分类</NavLink>
                <NavLink to='/shop' activeClassName='ac'>购物车</NavLink>
                <NavLink to='/geren' activeClassName='ac'>个人中心</NavLink>
            </footer>
        )
    }
}
