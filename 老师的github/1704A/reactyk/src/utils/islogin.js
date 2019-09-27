import React, { Component } from 'react'
const islogin = (Com)=>{
    return class extends Component{
        state = {
            islogin:false
        }
        render(){
            let {islogin} = this.state;
            return islogin ? <Com {...this.props}/> : null;
        }
        componentDidMount(){
            let userId = window.localStorage.userId;
            if(userId){
                this.setState({islogin:true})
            } else {
                this.props.history.push('/login');
            }
        }
    }
}

export default islogin;