import React, { Component } from 'react'
import {connect} from 'react-redux'

class index extends Component {
    state={
       
    }
    render() {
        let {list} = this.props
        console.log(list)
        
       
        return (
            <div>
                <button onClick={this.add.bind(this)}>添加地址</button>
                <button onClick={this.lou.bind(this)}>去楼层</button>
            
                {
                    list && list.map((item,index)=><div key={index}>
                        <p>{item.name}</p>
                        <p>{item.tit}</p>
                        <button onClick={this.edits.bind(this,item,index)}>编辑</button>
                        <button onClick={this.del.bind(this,index)}>删除</button>
                    </div>)
                }
            </div>
        )
    }
    lou(){
        this.props.history.push({
            pathname:"/louceng"
        })
    }
    del(index){
        let {list} = this.props
        list.splice(index,1)
        this.setState({
            list
        })
    }
    add(){
        this.props.history.push({pathname:"/address"})
    }
    edits(item,index){
        this.props.history.push({
            pathname:"/edit",
            query:{
                item,
                index
            }
        })

    }
}
export default connect (
    (state)=>{
        return {
            list: state.listReducer
        }
    },

)(index)