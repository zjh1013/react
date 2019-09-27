import React, { Component } from 'react'
import Router from './router/index'
import {Provider} from 'react-redux'
import store  from './store/store'
import './css/index.css'
export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
        <Router></Router>
        </Provider>
      </div>
    )
  }
}










// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     tit: "",
//     arr: [],
//     flag: false,
//     tit1:""
//   }
//   render() {
//     let { tit, arr, flag,tit1 } = this.state;
//     return (
//       <div>
//         <input value={tit} onChange={this.aaa.bind(this)} />
//         <button onClick={this.add.bind(this)}>add</button>
//         <button onClick={this.edit.bind(this)}>edit</button>

//         {
//           arr.map((item, index) => <div key={index}>
//             {
//               !flag ? <span >{item}</span> :null
//             }
//             {
//               flag ? <input value={tit} onChange={this.fine.bind(this)} /> : null
//             }
//           </div>)
//         }
//       </div>
//     )
//   }
//   fine(){

//   }
//   edit(index) {
//     let { tit, arr, flag,tit1 } = this.state;
//     tit = tit1
//     flag = !flag
//     this.setState({
//       flag
//     })
//   }
//   aaa(e) {
//     let { tit } = this.state;
//     tit = e.target.value;
//     this.setState({
//       tit
//     })
//     // console.log(tit)
//   }
//   add(e) {
//     let { tit, arr } = this.state;
//     arr.push({values:tit,})
//     this.setState({
//       arr,
//       tit:e.target.value=""
//     })

//   }
// }
