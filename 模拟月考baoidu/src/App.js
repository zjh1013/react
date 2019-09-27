import React, { Component } from 'react'
import Router from './router/index'
import './css/style.css'
// import AA from './view/aa'
import {Provider} from 'react-redux'
import store from './store/store'
export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>

        <Router></Router>

        </Provider>
        {/* <AA></AA> */}
      </div>
    )
  }
}
