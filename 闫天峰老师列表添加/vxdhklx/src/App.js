import React, { Component } from 'react'
import Ipt from './view/ipt'
import List from './components/list'
import './App.css'
export default class App extends Component {
  state={
    arr:[]
  }
  render() {
    let {arr} = this.state;
    return (
      <div className='da'>
        <List arr={arr}></List>
        <Ipt hc={this.h.bind(this)}></Ipt>
      </div>
    )
  }
  h(arr){
    this.setState({
      arr
    })
  }
}
