import React, { Component } from 'react'
import Hea from '../components/Header'
import { Route,Switch,Redirect } from 'react-router-dom'
import Home from './home'
import Zhaoche from './zhaoche'
import Ershou from './ershou'
import Fu from './fuwu'
import Lun from './luntan'
export default class index extends Component {
    render() {
        return (
            <div className="index">
                <Hea></Hea>
                <Switch>
                    <Route path="/index/home" component={Home}></Route>
                    <Route path="/index/zhaoche" component={Zhaoche}></Route>
                    <Route path="/index/ershou" component={Ershou}></Route>
                    <Route path="/index/fuwu" component={Fu}></Route>
                    <Route path="/index/luntan" component={Lun}></Route>
                    <Redirect from="/" to="/index/home"></Redirect>
                </Switch>
            </div>
        )
    }
}
