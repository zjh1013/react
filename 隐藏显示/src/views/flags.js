import React, { Component } from 'react'
import axios from 'axios'
import '../mock/index'
export default class flag extends Component {
    state={
        flag:false
    }
    render() {
        let {flag } = this.state;
        return (
            <div>
                <div>
                    <span onClick={()=>{
                        this.setState({
                            flag : !flag
                        })
                    }}>{flag ? '↓↓↓↓↓隐藏' : '↑↑↑↑↑显示'}</span>
                </div>
                <div className={`da${flag ? "" : "none"}`} onClick={()=>{this.setState({
                    flag:false
                })}}>
                    <div className='xiao'>

                    </div>
                </div>
                
            </div>
        )
    }
    componentDidMount(){
        // axios.get('/api/list').then(res)
    }
}
