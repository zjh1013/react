import React, { Component } from 'react'
import {connect} from 'react-redux'
 class address extends Component {
    state={
        name:"",
        tit:""
    }
    render() {
        let {name,tit} = this.state
        return (
            <div>
                <input value={name} onChange={this.changename.bind(this)} name="name" />
                <input value={tit} onChange={this.changename.bind(this)}  name="tit" />
                <button onClick={this.add.bind(this)}>提交</button>
            </div>
        )
    }
    changename(e){
        let names = e.target.name;
        this.setState({
            [names]:e.target.value
        })
    }
    add(){
        let {name,tit} = this.state
            let obj = {name,tit}
            this.props.send(obj) 
        this.props.history.push({pathname:"/index"})
    }
}
export default connect (
    (state)=>{
        return {

        }
    }, 
    (dispatch)=>{
        return {
                send(data){
                    dispatch({type:"AAA",data})
                }
        }
    }
)(address)
