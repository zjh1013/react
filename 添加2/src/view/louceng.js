import React, { Component } from 'react'
import '../mock/index'
import axios from 'axios'
export default class louceng extends Component {
    state={
        list:[],
        ind:0
    }
    render() {
        let {list , ind} = this.state
        console.log(list)
        
        return (   
            <div className="da">
                <div className="zuo">
                    {
                        list && list.map((item,index)=><p className={ind === index ? 'ac' : ''} key={index} onClick={this.qqq.bind(this,index)}>{item.name}</p>)
                    }
                </div>
                <div className="you">
                        {
                            list && list.map((item,index)=><div key={index}>
                                <span>{item.name}</span>
                                {
                                    item.children && item.children.map((item1,index1)=><div className="aa" key={index1}>
                                        {item1.name}
                                    </div>)
                                }
                            </div>)
                        }
                </div>
            </div>
        )
    }
    qqq(index){
        // let {ind} = this.state
        this.setState({
            ind : index
        })
        let aa = this.state.list
    }
    componentDidMount(){
        axios.get('/api/list').then((res)=>{
            this.setState({
                list : res.data
            })
            
        })
    }
}
