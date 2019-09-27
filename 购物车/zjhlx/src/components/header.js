import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class header extends Component {
    render() {
        return (
            <div>
                <div className='imgs'>
                    <img src="https://123p0.sogoucdn.com/imgu/2019/07/20190729112927_343.jpg"/>
                </div>
                <div className='yuan'>
                    <img  src="http://cms-bucket.nosdn.127.net/4e15b4f121754d20a10352cca573690220180412125534.png"/>
                </div>
                <h2 className='h2'>时尚精品屋</h2>
                <div className='aa'>
                        <NavLink to='/shouye' activeClassName='ac'>首页</NavLink>
                        <NavLink to='/shop' activeClassName='ac'>购物</NavLink>
                </div>
                
            </div>
        )
    }
}
