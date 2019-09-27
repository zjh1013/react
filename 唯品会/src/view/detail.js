import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
 class detail extends Component {
    render() {
        let {query} = this.props.location;
        return (
            <div>
                <div className='oo'>
                    <span className='zuo' onClick={()=>{this.props.history.go(-1)}}>&lt;</span>
                    <h3 className='zhong'>{query.lian}</h3>
                    <span className='you'>○</span>
                </div>
                <div className='liebiao'>
                    {
                        query && query._list.map((item,index)=>{
                            return <div key={index} className='jj' onClick={this.clickXiangqing.bind(this,item)}>
                                    <img src={item.img} />
                                    <span>￥{item.money}元</span>
                                    <p>{item.title}</p>
                            </div>  
                        })
                    }
                    
                </div>
            </div>
        )
    }
    clickXiangqing(item){
        this.props.history.push({
            pathname:'/xiangqing',
            query:item
        })
    }
}
export default withRouter(detail)
