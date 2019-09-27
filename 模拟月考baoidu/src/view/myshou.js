import React, { Component } from 'react'
import {connect} from 'react-redux'
 class myshou extends Component {
    render() {
        let {qulist} = this.props
        return (
            <div>
                <div className='tou'>
                <span className='zuo' onClick={()=>{this.props.history.go(-1)}}>&lt;</span>
                <span className='you'>我的收藏</span>
                </div>
                {
                    qulist.map((item,index)=><span key={index} className='shou'>{item.title}</span>)
                }
            </div>
        )
    }
}

export default connect(
    (state)=>{
        return {
            qulist:state.listReducer
        }
    }
)(myshou)
 