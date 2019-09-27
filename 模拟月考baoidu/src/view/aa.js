
// import { Drawer, Button, Radio } from 'antd';
import { Modal, Button } from 'antd';
import React from 'react'
import "antd/dist/antd.css";

// const RadioGroup = Radio.Group;

export default class App extends React.Component {
  state = { visible: false };

  showModal () {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
 
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {

    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal.bind(this)}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

// ReactDOM.render(<App />, mountNode);




// import React, { Component } from 'react'

// export default class aa extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }
