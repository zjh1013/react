import React, { Component } from 'react'

import isLogin from '../../utils/islogin'
// class Login extends Component{
//     state = {
//         islogin:false
//     }
//     render(){
//         let {islogin} = this.state;
//         return islogin ? <Search {...this.props}/> : null;
//     }
//     componentDidMount(){
//         let userId = window.localStorage.userId;
//         if(userId){
//             this.setState({islogin:true})
//         } else {
//             this.props.history.push('/login');
//         }
//     }
// }
 class Search extends Component {
    render() {
        return (
            <div>
                搜索
            </div>
        )
    }
}

export default isLogin(Search)