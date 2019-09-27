import React, { Component } from 'react'
import Footer from '../components/footer'
import {connect} from 'react-redux'
 class shop extends Component {
    render() {
        let {quList} = this.props;
        return (
            <div id='ll'>
                <div className='xia'>
                    {
                        quList.map((item,index)=>{
                            return <div className='gouwu' key={index}>
                                <img src={item.img} />
                                <span>￥{item.money}元</span>
                                <p>{item.title}</p>

                                <button onClick={this.changeNum.bind(this,     item.num>=1 ? item.num-1 :item.num=1     ,item.id)}>-</button>
                                <b>{item.num}</b>
                                <button onClick={this.changeNum.bind(this,item.num+1,item.id)}>+</button>
                            </div>
                        })
                    }
                    <div className='zong'>总价:
                    {
                        quList.reduce((total , item)=>{
                            return  total+item.num*item.money
                        },0)
                    }
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
    changeNum(num,id){
        let obj=Object.assign({},{num},{id})

        this.props.savesNum(obj)
    }   
}
export default connect(
    (state)=>{
        return {
            quList : state.ShopReducer
        }
    },
    (dispatch)=>{
        return{
                savesNum(data){
                    dispatch({type:'CHANGE_NUM',data})
                }
        }
    }
)(shop)
