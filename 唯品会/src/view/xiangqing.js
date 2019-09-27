import React, { Component } from 'react'
import {connect} from 'react-redux'
 class xiangqing extends Component {
    render() {
        let {query} = this.props.location
        // console.log(query)
        return (
            
            <div >
                <div className='oo'>
                    <span className='zuo' onClick={()=>{this.props.history.go(-2)}}>&lt;</span>
                    <h3 className='zhong'>{query.lian}</h3>
                    <span className='you'>○</span>
                </div>
                <div className='xiang'>
                    <img src={query.img} />
                    <span>￥{query.money}元</span>
                    <p>{query.title}</p>
                    <div className='gou' onClick={this.clickShop.bind(this,query)}><span>加入购物车</span></div>
                </div>
                    
            </div>
        )
    }
    clickShop(query){
        this.props.save(query)
        this.props.history.push('/shop')
    }
}

export default connect(
    null,
    (dispatch)=>{
        return {
            save(data){
                dispatch({type:'SHOP_LIST',data})
            }
        }
    }
)(xiangqing)
