import React, { Component } from 'react'
import { NavLink,withRouter } from 'react-router-dom'
class Foot extends Component {
    state = {
        list: [
            {
                url: '/index/home',
                img: '12.png',
                txt:'首页',
                active: '11.png'
            },
            {
                url: '/index/list',
                img: '22.png',
                txt:'分类',
                active: '21.png'
            },
            {
                url: '/index/car',
                img: '32.png',
                txt:'购物车',
                active: '31.png'
            },
            {
                url: '/index/my',
                txt:'我的',
                img: '42.png',
                active: '41.png'
            }
        ],
        ind:0
    }
    render() {
        let { list,ind } = this.state;

        return (
            <footer>
                {
                    list && list.map((item, index) => <dl
                    onClick={this.handleChange.bind(this,index,item.url)}
                     key={index} className={ind === index ? 'active' :''}>
                        <dt>
                            <img src={ind === index ? require('../img/'+item.active) : require('../img/'+item.img)}/>
                        </dt>
                        <dd>
                            {item.txt}
                        </dd>
                    </dl>)
                }
            </footer>
        )
    }
    handleChange(ind,url){
        this.setState({ind})
        this.props.history.push(url);
    }
}

export default withRouter(Foot);