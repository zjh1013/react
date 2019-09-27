import React, { Component } from 'react'
import Hea from '../components/header'
import axios from 'axios'
import {connect} from 'react-redux'
class shouye extends Component {
    state={
        list:[],
    }
    render() {
        let {list} = this.state;
        console.log(list)
        return (
            <div>
                
                <Hea></Hea>
                <div>
                    {
                        list.map((item,index)=>{
                            return <div key={index} className='da'>
                                <div className='zuo'>
                                <img src={item.img} />
                                </div>
                                <div className='you'>
                                    <p>{item.title}</p>
                                    <p>已售：{item.sell}件</p>
                                    <p>单价：<b>￥{item.money}</b>元<button onClick={this.addShop.bind(this,item)}>加入购物车</button></p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount () {
        axios.get('/api/list').then((res)=>{
            this.setState({
                list:res.data.data
            })
        })
    }
    addShop(item){
        this.props.addshop(item)
    }
}
export default connect(
   (state)=>{//qu
        return{

        }
   },
    (dispatch)=>{//cun
        return {
            addshop(data){
                dispatch({type:'ADD_SHOP',data})
            }
        }
    }
)(shouye)