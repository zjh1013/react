import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class header extends Component {
    render() {
        return (
            <div className='tab'>
                <NavLink to="/home" activeClassName="active">首页</NavLink>
                <NavLink to="/fenlei" activeClassName="active">分类</NavLink>
                <NavLink to="/shop" activeClassName="active">购物</NavLink>
                <NavLink to="/my" activeClassName="active">我的</NavLink>
            </div>
        )
    }
}
