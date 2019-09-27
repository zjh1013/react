import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import RouterView from '../../router/routerview'
export default class Index extends Component {
    render() {
        let {child} = this.props;
        return (
            <div>
                <RouterView routes={child}/>
                <NavLink to="/index/home">首页</NavLink>
                <NavLink to="/index/sort">排行</NavLink>
                <NavLink to="/index/my">我的</NavLink>
            </div>
        )
    }
}
