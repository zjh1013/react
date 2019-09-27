import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class header extends Component {
    render() {
        return (
            <div className='tab'>
                <NavLink to='/shouyi' activeClassName='ac'>骑行受益</NavLink>
                <NavLink to='/jilu' activeClassName='ac'>骑行记录</NavLink>
            </div>
        )
    }
}
