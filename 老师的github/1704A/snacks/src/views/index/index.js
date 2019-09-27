import React, { Component } from 'react'
import Foot from '@/component/foot'
import RouterView from '@/router/routerview'
export default class Index extends Component {
    render() {
        let {child} = this.props;
        return (
            <div>
                <RouterView routes={child}/>
                <Foot />
            </div>
        )
    }
}
