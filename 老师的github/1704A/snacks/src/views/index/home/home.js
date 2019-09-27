import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                首页
                <div>
                    {
                        list && list.map((item, index) => <dl key={index}>
                            <dt>
                                {item.img}
                            </dt>
                            <dd>
                                <h3>{item.name}</h3>
                                <span>{item.flag }</span>
                            </dd>
                        </dl>)
                    }
                </div>
            </div>
        )
    }
}
