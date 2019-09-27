import React, { Component } from 'react'

export default class List extends Component {
    render() {
        let {arr} = this.props;
        return (
            <div className='list'>
                {
                    arr.map((item,index)=><p key={index}>{item}<button onClick={this.remove.bind(this,index)}>删除</button></p>)
                }
            </div>
        )
    }
    remove(index){

        let {arr} = this.props
        arr.splice(index,1)
       
        this.setState({
            arr
        })
        
    }
}
