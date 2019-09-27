import React, { Component } from 'react'
import Router from './router/index'
import './css/index.css'
import { Provider } from 'react-redux'
import store from './store/store'
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
