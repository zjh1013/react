import React, { Component } from 'react'
import axios from 'axios'
import '../../mock/index'
export default class Login extends Component {
    state = {
        name: '',
        pwd: ''
    }
    render() {
        let { name, pwd } = this.state;
        return (
            <div>
                <input placeholder="请输入姓名" name="name"  value={name} onChange={this.handleChange.bind(this)} />
                <input placeholder="请输入密码" name="pwd" value={pwd} onChange={this.handleChange.bind(this)} />
                <button onClick={this.handleSubmit.bind(this)}>登录</button>
            </div>
        )
    }
    changeVal(val,e) {
        // console.log(e);
        // console.log(val);
        // this.setState({ name: e.target.value })
    }
    handleChange(e) {
        console.log(e.target.name);
        let  val = e.target.name;
        this.setState({ [val]: e.target.value })
    }
    handleSubmit(){
        let {name,pwd} = this.state;
        console.log(name,pwd);
        axios.post('/api/login',{name,pwd}).then((res)=>{
            console.log(res);
            if(res.data.code == 1){
                window.localStorage.userId = name;
                this.props.history.go(-1)
            }
        });
    }

}
