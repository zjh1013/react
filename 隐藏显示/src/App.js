import React, { Component } from 'react'
import Flag from './views/flags'
import './App.css'
import {Provider} from 'react-redux'
import store from './store/store'
export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>

        <Flag></Flag>

        </Provider>
      </div>
    )
  }
}
