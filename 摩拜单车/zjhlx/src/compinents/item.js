import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
class item extends Component {
    state={
        list:[],
    }
    render() {
        let {list} = this.state
        return (
            <div>
                {
                    list.map((item,index)=>{
                        return <div key={index} className='aa' onClick={this.aaa.bind(this,item)}>
                           <h2>{item.title}</h2>
                           <span>{item.times}</span>&nbsp;&nbsp;&nbsp;<span>{item.fen}分钟</span>&nbsp;&nbsp;&nbsp;<span>{item.money}元</span>
                        </div>
                    }) 
                }
            </div>
        )
    }
    aaa(item){
        let {history} = this.props
        history.push({
            pathname:'/xiangqing',
            query:item
        })
    }
    componentDidMount () {
        axios.get('/api/list').then((res)=>{
            this.setState({
                list:res.data.data
            })
        })
    }
}
export default (withRouter)(item)
