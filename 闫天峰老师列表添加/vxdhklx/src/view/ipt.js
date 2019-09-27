import React, { Component } from 'react'

export default class ipt extends Component {
    state={
        val:"",
        arr:[]
    }
    render() {
        let {val} = this.state
        let {hc} = this.props;
        return (
            <div className='ipt'>
                <div className='aa'>
                    <input value={val} onChange={this.aaa.bind(this)}/>
                    <button onClick={this.fa.bind(this,hc)}>发送</button>
                </div>
            </div>
        )
    }
    aaa(e){
        this.setState({
            val:e.target.value
        })
    }
    fa(hc,e){
        let {val,arr} = this.state
        arr.push(val);
        hc(arr)
        this.setState({
            val:e.target.value=''
        })
    }
}
