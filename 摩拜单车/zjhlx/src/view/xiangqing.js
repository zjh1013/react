import React, { Component } from 'react'

export default class xiangqing extends Component {
    render() {
        let {query} = this.props.location
        return (
            <div>
                <h1>行程记录</h1>
                <div className='da'>
                    <h2>{query.money}元</h2>
                    <span>节约碳排量：{query.jie}</span>&nbsp;&nbsp;&nbsp;<span>卡路里：{query.ka}</span>&nbsp;&nbsp;&nbsp;<span>骑行距离：{query.ju}</span>&nbsp;&nbsp;&nbsp;<span>时间：{query.fen}</span>
                </div>
            </div>
        )
    }
}
