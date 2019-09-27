import React, { Component } from 'react'
import Head from '../../component/head'
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from './home'
import Find from './find'
import Frunt from './frunt'
import RouterView from '../../router/routerview'
export default class Index extends Component {
    render() {
        console.log(this.props);
        let {child} = this.props;
        return (
            <div className="index">
                <Head />
                <RouterView routes={child}/>
                {/* <Switch>
                    <Route path="/index/home" component={Home}/>
                    <Route path="/index/find" component={Find}/>
                    <Route path="/index/frunt" component={Frunt}/>
                    <Redirect from="/index" to="/index/home"/>
                </Switch> */}
            </div>
        )
    }
}
