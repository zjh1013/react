// import React, { Component } from 'react'
// import axios from 'axios'
// import Item from '../components/item'
// export default class home extends Component {
//     state={
//         list:[],
//         ind:0
//     }
//     render() {
//         let {list,ind} = this.state;
//         console.log(list)
//         return (
//             <div>
//                 <div className='tou'>
//                     <span className='zuo'>〓</span>
//                     <span  className='you'>▓</span>
//                 </div>
//                 <h1>Bai★百度</h1>
//                 <div className='shang'>
//                 {
//                         list.map((item,index)=><span key={index} className={index===ind ? 'ac' : ''}
//                             onClick={()=>{
//                                 this.setState({
//                                     ind : index
//                                 })
//                             }}
//                         >{item.name_1}</span>)
//                     }
//                 </div>
//                     <div className='xia'>
//                     {
//                         list[ind] && list[ind].list_1.map((item,index)=><Item key={index} item={item}></Item>)
//                     }
//                     </div>
//             </div>
//         )
//     }
//     componentDidMount () {
//         axios.get('/api/list').then((res)=>{
//             this.setState({
//                 list:res.data.data
//             })
//         })
//     }
// }



import { Drawer, Button, Radio } from 'antd';
import React from 'react'
import "antd/dist/antd.css";

import axios from 'axios'
import Item from '../components/item'

const RadioGroup = Radio.Group;

export default class home extends React.Component {
  state = { visible: false, placement: 'left' ,
  list:[],
     ind:0};

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };

  render() {
    let {list,ind} = this.state;
    
    return (
      <div>
          
        <RadioGroup
          style={{ marginRight: 8 }}
          defaultValue={this.state.placement}
          onChange={this.onChange}
        >
          {/* <Radio value="top">top</Radio> */}
          {/* <Radio value="right">right</Radio> */}
          {/* <Radio value="bottom">bottom</Radio> */}
          {/* <Radio value="left">left</Radio> */}
        </RadioGroup>
        <div className='tou'>
        <span  className='zuo'><Button type="primary" onClick={this.showDrawer}>
        〓
        </Button></span>
        <span  className='you'>▓</span>
        
        </div>

        

        <h1>Bai★百度</h1>

                        <div className='shang'>
               {
                        list.map((item,index)=><span key={index} className={index===ind ? 'ac' : ''}
                            onClick={()=>{
                                this.setState({
                                    ind : index
                                })
                            }}
                        >{item.name_1}</span>)
                    }
                </div>
                    <div className='xia'>
                    {
                        list[ind] && list[ind].list_1.map((item,index)=><Item key={index} item={item}></Item>)
                    }
                    </div>
        
        <Drawer
          title="Basic Drawer"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p onClick={()=>{this.props.history.push('/myshou')}}>我的收藏</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  }
      componentDidMount () {
        axios.get('/api/list').then((res)=>{
            this.setState({
                list:res.data.data
            })
        })
    }
  
}
