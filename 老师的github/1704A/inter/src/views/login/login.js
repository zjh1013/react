import React, { Component } from 'react'
import { buyer } from '../../api/api'
export default class Login extends Component {
    state = {
        grap: '',
        name: '',
        pwd: '',
        grapval: ''
    }
    render() {
        let { grap, name, pwd, grapval } = this.state;
        console.log(grap);
        return (
            <div>
                <input placeholder="用户名" value={name} name="name" onChange={this.handleChange.bind(this)} />
                <input placeholder="密码" value={pwd} name="pwd" onChange={this.handleChange.bind(this)} />
                <input placeholder="图形验证" value={grapval} name="grapval" onChange={this.handleChange.bind(this)} /><span dangerouslySetInnerHTML={{ __html: grap }}></span>
                <button onClick={this.handleSubmit.bind(this)}>登录</button>
            </div>
        )
    }
    async componentDidMount() {
        let res = await buyer.captcha()
        this.setState({ grap: res.data.data })
    }
    handleChange(e) {
        let name = e.target.name;
        this.setState({ [name]: e.target.value })
    }
    showToast(mes) {
        // Toast.info(mes, 1);
    }
    async handleSubmit() {
        let { name, pwd, grapval } = this.state;
        let res = await buyer.login({
            username: name,
            password: pwd,
            captcha: grapval
        });
        console.log(res);
        if (res.data.code === 1) {
            window.localStorage.token = res.data.token;
            // this.props.history.go(-1)
            this.props.history.push('/city');
        } else {
            // this.showToast(res.data.mes);
        }
    }
}
