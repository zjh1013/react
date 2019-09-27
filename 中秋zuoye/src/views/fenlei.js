import React, { Component } from 'react'
import Hea from '../components/header'
import { connect } from 'react-redux'
import { getList } from '../serve/httplist'
import '../mock/index'
class fenlei extends Component {
    state={
        ind:0
    }
    render() {
        let {ind} = this.state;
        let {list} = this.props;
        console.log(list)
        

        return (
            <div>
                <Hea></Hea>
                <div className="da">
                    <div className="left">
                        {
                            list && list.map((item,index)=><p key={index} className={ind===index ? 'active' : ''}
                                onClick={()=>{this.setState({ind:index})}}
                            >{item.cate}</p>)
                        }
                    </div>
                    <div className="right">
                        {
                            list[ind] && list[ind].detail.map((item,index)=><div key={index}>
                                <h4>{item.name}</h4>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.save('/api/list')
    }
}
export default (connect)(
    (state) => {
        return {
            list : state.listReducer
        }
    },
    (dispatch) => {
        return {
            save(url) {
                dispatch(getList(url))
            }
        }
    }
)(fenlei)