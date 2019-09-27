import React, { Component } from 'react'
import axios from 'axios'
import '../../mock/index'
import Food from '../../component/food-item'
import {connect} from 'react-redux'
import { ADD } from '../../store/types';
class Classify extends Component {
    state = {
        list:[],
        classify:[]
    }
    render() {
        let {classify} = this.state;
        console.log(classify);
        return (
            <div>
                {
                    classify && classify.map((item,index) => 
                    <Food
                    key={index} 
                    item={item} 
                    handleType={this.handleType.bind(this)}
                    handleClick={this.handleClick.bind(this)}/>)
                }
            </div>
        )
    }
    handleClick(id){ //更改的check状态
        console.log('9999');
        let {list} = this.state;
        let ind = list.findIndex(item => item.id == id);
        list[ind].check = !list[ind].check ;
        
        this.setState({list})
        
    }
    handleType(index,id){ //点击状态
        console.log('type',index,id);
        let {list} = this.state;
        let ind = list.findIndex(item => item.id == id);
        console.log(ind);
        list[ind].flag = index;
        list[ind].check = false;
        this.setState({list})

        this.props.addlist(list[ind]);
        
    }
   async componentDidMount(){
        let res = await axios.get('/api/classify');
        let {type} = this.props.match.params;
        let classify = res.data.filter(item => item.type == type);
        this.setState({list:res.data,classify})
    }
}

export default connect((state)=>{
    return {

    }
},(dispatch)=>{
    return {
        addlist(obj){
            dispatch({type:ADD,obj})
        }
    }
})(Classify)