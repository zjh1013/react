import React, { Component } from 'react'
import axios from 'axios'
import Item from '../components/item'
export default class list extends Component {
    state={
        name:[],
        ind:0
    }
    render() {
        let {name,ind} = this.state;
        return (
            <div>
                <div className='shang'>
                {
                    name && name.map((item,index)=><span key={index} className={index==ind ? 'ac' : ''}
                    onClick={()=>{this.setState({
                        ind:index
                    })}}
                    >{item.names}</span>)
                }
                </div>
                <div className='xia'>
                {
                    name[ind] && name[ind].list.map((item,index)=><Item key={index} item={item}></Item>)
                }
                </div>
            </div>
        )
    }
    componentDidMount(){
        axios.get('/api/list').then((res)=>{
            this.setState({
                name:res.data.data
            })
        })
    }
}
