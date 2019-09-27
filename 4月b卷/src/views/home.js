import React, { Component } from 'react'
import '../mock/index'
// import axios from 'axios'
import { connect } from 'react-redux'
import { getList } from '../store/action/qingqiu'

class home extends Component {
    state = {
        list: [],
    }
    render() {
        let { list } = this.state;

        let { aaa } = this.props;
        console.log(aaa)


        console.log(list)

        return (
            <div>
                {
                    list.map((item, index) => <div className="item" key={index}>
                        <img src={item.img} />
                        <p>{item.title}</p>
                        <span>价格：{item.price}</span>
                    </div>)
                }
            </div>
        )
    }
    componentDidMount() {
        // axios.get('/api/shouye').then((res) => {
        //     this.setState({
        //         list: res.data.list
        //     })
        // })
        this.props.getlist('/api/shouye')
    }
}


export default (connect)(
    (state) => {
        return {
            list: state.listReducers
        }
    },
    (dispatch) => {
        return {
            getlist(url) {
                dispatch(getList(url))
            }
        }
    }
)(home)
