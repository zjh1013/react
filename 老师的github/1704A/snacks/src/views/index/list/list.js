import React, { Component } from 'react'
import listcss from './list.module.scss'
import { connect } from 'react-redux'
import { getInit } from '@/store/list/listaction.js'
class List extends Component {
    state = {
        ind: 0
    }
    render() {
        // console.log(this.props);
        let { list } = this.props;
        let { ind } = this.state;
        return (
            <div className={`${listcss['list']}`}>
                <div className={`${listcss['left']}`}>
                    <ul>
                        {
                            list && list.map((item, index) => <li
                                onClick={this.handleChange.bind(this, index)}
                                className={ind == index ? 'active' : ''} key={index}>{item.cate}</li>)
                        }
                    </ul>
                </div>
                <div className={`${listcss['right']}`}>
                    <div>
                        {
                            list[ind] && list[ind].detail.map((item, index) => 
                            <dl key={index} onClick={this.handleDetail.bind(this,item)}>
                                <dt>
                                    <img src={require('@/img/'+item.thumb)}/>
                                </dt>
                                <dd>{item.name}</dd>
                            </dl>)
                        }
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        // axios
        this.props.getinit();
    }
    handleChange(ind) {
        this.setState({ind})
    }
    handleDetail(obj){
        this.props.history.push({
            pathname:'/detail',
            query:obj
        });
    }
}

export default connect((state) => {
    console.log(state);
    return {
        list: state.list.list
    }
}, (dispatch) => {
    return {
        getinit() {
            dispatch(getInit)
        }
    }
})(List)
