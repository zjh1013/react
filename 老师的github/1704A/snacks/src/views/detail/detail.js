import React, { Component } from 'react'
import {connect} from 'react-redux'
import {ADD_SHOP} from '@/store/types'
 class Detail extends Component {
    render() {
        console.log(this.props);
        let {thumb,name,count,price} = this.props.location.query;
        return (
            <div>
                <img src={require('@/img/'+thumb)}/>
                <h3>{name}</h3>
                <span>{count}</span>
                <span>{price}</span>
                <div onClick={this.handleShop.bind(this,this.props.location.query)}>添加购物车</div>
            </div>
        )
    }
    handleShop(obj){ 
        this.props.addShop(obj);
        this.props.history.push('/index/car');
    }
}

export default connect((state)=>{
    return{

    }
},(dispatch)=>{
    return {
        addShop(obj){ //添加购物车
            dispatch({type:ADD_SHOP,obj})
        }
    }
})(Detail)
