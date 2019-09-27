import React, { Component } from 'react'
import Hea from '../components/header'
import {connect} from 'react-redux'
class shop extends Component {
    render() {
       let {qu} = this.props;
       console.log(qu)
        return (
            <div>
                <Hea></Hea>
                {
                    qu.map((item,index)=><h2 key={index}>{item.title}价格{item.money}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={this.changenum.bind(this,    item.num>=1?item.num-1:item.num=1,    item.id)}>--</button>
                    {item.num}
                    <button onClick={this.changenum.bind(this,    item.num+1,      item.id)}>+</button>
                    </h2>)
                }
                <div>总价:
                    {
                        qu.reduce((total , item)=>{
                            return  total+item.num*item.money
                        },0)

                        
                        //total      :  总价
                        //item.num   ： 衣服的个数
                        //item.money :  每一件的价格
                        //总价   =     个数*价格
                    }
                    
                </div>
                
            </div>
        )
    }
    changenum(num,id){
        let obj=Object.assign({},{num},{id})
            this.props.aaa(obj)

    }
    
}
export default connect(
    (state)=>{//qu 
        return {
            qu:state.listReducer
        }
    },
    (dispatch)=>{
        return{
            aaa(data){
                dispatch({type:'CHANGE_NUM',data})
            }
        }
    }
)(shop)
