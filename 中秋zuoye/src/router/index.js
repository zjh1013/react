import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from '../views/home'
import Fen from '../views/fenlei'
import Shop from '../views/shop'
import My from '../views/my'
function RootRouter() {
    return <Router>
        <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/fenlei" component={Fen}></Route>
            <Route path="/shop" component={Shop}></Route>
            <Route path="/my" component={My}></Route>
            <Redirect from='/' to='/home'></Redirect>
        </Switch>
    </Router>
}
export default RootRouter