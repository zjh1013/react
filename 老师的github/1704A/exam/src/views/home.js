import React, { Component } from 'react'

export default class Home extends Component {
    state = {
        list:[
            {
                name:'顺序练习',
                id:1,
                color:'red'
            },
            {
                name:'模拟考试',
                id:2,
                color:'blue'
            },
            {
                name:'随机练习',
                id:3,
                color:'yellow'
            }
        ]
    }
    render() {
        let {list} = this.state;
        return (
            <div>
                <ul>
                    {
                        list && list.map((item,index) => <li
                        onClick={this.handleGoExam.bind(this,item.id)}
                         key={index} style={{background:item.color}}>{item.name}</li>)
                    }
                </ul>
            </div>
        )
    }
    handleGoExam(id){
        this.props.history.push('/exam/'+id);
    }
}
