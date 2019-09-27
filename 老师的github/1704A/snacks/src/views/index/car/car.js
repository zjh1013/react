import React, { Component } from 'react'
import { connect } from 'react-redux'
import {CHECK,ALL_CHECK,CHANGE_COUNT} from '@/store/types'
class Car extends Component {
    render() {
        let { buyList ,all,sum} = this.props;
        console.log(buyList);
        return (
            <div>
                {
                    buyList && buyList.map((item, index) => <div key={index}>
                        <input type="checkbox" checked={item.checked} 
                        onChange={this.handleChange.bind(this,index,!item.checked)} />
                        <dl>
                            <dt>
                                <img src={require('@/img/'+item.thumb)}/>
                            </dt>
                            <dd>
                                <h3>{item.name}</h3>
                                <div>{item.price}</div>
                                <span onClick={this.handleCount.bind(this,item.count-1,index)}>-</span>
                                <span>{item.count}</span>
                                <span onClick={this.handleCount.bind(this,item.count+1,index)}>+</span>
                                <div>x</div>
                            </dd>
                        </dl>
                    </div>)
                }
                <div>
                    <input type="checkbox" checked={all} onChange={this.handleChangeAll.bind(this,!all)}/>全选
                    <span>总价：{sum}</span>
                </div>
            </div>
        )
    }
    handleChange(ind,flag) { //单选
        this.props.changeCheck(ind,flag);
    }
    handleChangeAll(flag){
        this.props.changeAll(flag);
    }
    handleCount(count,ind){ //加减
        this.props.changeCount(count,ind);
    }
}


export default connect((state) => {
    console.log(state);
    return {
        buyList: state.shop.buyList,
        all:state.shop.allCheck,
        sum:state.shop.sumPrice
    }
}, (dispatch) => {
    return {
        changeCheck(ind,flag){
            dispatch({type:CHECK,ind,flag})
        },
        changeAll(flag){ //全选
            dispatch({type:ALL_CHECK,flag})
        },
        changeCount(count,ind){
            dispatch({type:CHANGE_COUNT,count,ind})
        }
    }
})(Car)