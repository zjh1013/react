// import React, { Component } from 'react'
// import { Drawer, List, NavBar, Icon } from 'antd-mobile';
// export default class detail extends Component {
//     state = {
//         open: true,
//       }
//       onOpenChange = (...args) => {
//         console.log(args);
//         this.setState({ open: !this.state.open });
//       }
//     render() {
//         let {query} = this.props.location;
//         return (
//             <div>
//                 <div className='tou'>
//                     <span  className='zuo' onClick={this.aaa.bind(this)}>&lt;</span>
//                     <span  className='you'>●</span>
//                 </div>
                // <div>
                //     <img src={query.img} />
                //     <p>{query.title}</p>
                // </div>
                
//             </div>
//         )
//     }
//     aaa(){
//         this.props.history.go(-1)
//     }
// }



import { Drawer, Button, Radio } from 'antd';
import React from 'react'
import "antd/dist/antd.css";
import {connect} from 'react-redux'

const RadioGroup = Radio.Group;

 class detail extends React.Component {
  state = { visible: false, placement: 'bottom' ,
  name:'收'
};

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
    let {query} = this.props.location;
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
        <span  className='zuo' onClick={this.aaa.bind(this)}>&lt;</span>
        <span  className='you'><Button type="primary" onClick={this.showDrawer}>
        …
        </Button></span>
        </div>
        <div>
                    <img src={query.img} />
                    <p>{query.title}</p>
        </div>
        
        <Drawer
          title="Basic Drawer"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
            
           
          {/* {this.state.name==='收' ? (<p onClick={this.shouCang.bind(this,query)}>收藏</p>) : null} */}
          {
                    this.props.shoucangList.find((n,index)=>{
                        return n.id === query.id
                    })
                    ?
                    <div className="btn" onClick={()=>{ this.props.cancel_shoucang(query.id) }}>已收藏</div>
                    :
                    <div className="btn" onClick={()=>{ this.props.saves(query) }}>收藏</div>

                }
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  }
  aaa(){
    this.props.history.go(-1)
  }
  // shouCang(query,e){
  //       this.props.saves(query)
  //       e.target.innerHTML="已收藏"
  // }
  
}

export default connect(
  (state)=>{
    return {
        shoucangList:state.listReducer
    }
},
    (dispatch)=>{
        return{
            saves(data){
                dispatch({type:'AA',data})
            },
            cancel_shoucang(id){
              dispatch({type:'BB',id})
              
            }
        }
    }
)(detail)
