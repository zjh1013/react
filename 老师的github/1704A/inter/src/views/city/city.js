import React, { Component } from 'react'
import { buyer } from '../../api/api'
import city from './city.module.scss'
export default class City extends Component {
    state = {
        list:[]
    }
    render() {
        let {list} = this.state;
        return (
            <div>
                <div className={`${city['content']}`}>
                  {
                      list && list.map((item,index)=><div 
                      onClick={this.handleStorelist.bind(this,item.store_id)}
                      key={index}>{item.store_name}</div>)
                  }
                </div>
                {/* <div className={`${city['footer']}`}></div> */}
            </div>
        )
    }
    async componentDidMount(){
        let res = await buyer.storelist();
        console.log(res);
        this.setState({list:res.data.result})
    }
    handleStorelist(id){
        this.props.history.push('/storelist/'+id);
    }
}
