import React, { Component } from 'react'

export default class item extends Component {
    render() {
        let {item} = this.props;
        return (
            <dl>
                <dt>
                    <img src={item.img} />
                </dt>
                <dd>
                    <p>{item.title}</p>
                    <p>价格：<b>{item.price}</b>元</p>
                </dd>
            </dl>
        )
    }
}
