import React, { Component } from 'react'

export default class login extends Component {
    render() {
        return (
            <div>
                <p><input /></p>
                <p><input /></p>
                <button onClick={this.denglu.bind(this)}>登录</button>
            </div>
        )
    }
    denglu(){
        if(!window.localStorage.getItem('user','id')){
            localStorage.setItem('user','id');
            this.props.history.go(-1)
        }
    }
}
