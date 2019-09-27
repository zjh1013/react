import React, { Component } from 'react'
import {connect} from 'react-redux'
class My extends Component {
    state = {
        ind:0,
        arr:['常吃','不吃','偶尔']
    }
    render() {
        let {list} = this.props;
        let {ind,arr} = this.state;
        console.log(ind,list);
        let classify = list.filter(item => item.flag == ind);
        console.log(classify);
        return (
            <div>
                <ul>
                    {
                        arr.map((item,index) => <li 
                        onClick={(index)=>{
                            this.setState({ind:index})
                        }}
                        key={index}>{item}</li>)
                    }
                </ul>
                {/* <Food /> */}
            </div>
        )
    }
}

export default connect((state)=>{
    console.log(state,'my@@@@');
    return {
        list:state.classify.list
    }
},(dispatch)=>{
    return {

    }
})(My)