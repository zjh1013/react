import React from 'react'
import {BrowserRouter as Router ,Route ,Switch,Redirect} from 'react-router-dom'
import Index from '../view/index'
import Address from '../view/address'
import Edit from '../view/edit'
import Lou from '../view/louceng'
function RoootRouter(){
    return <Router>
        <Switch>
            <Route path="/index" component={Index} ></Route>
            <Route path="/address" component={Address}></Route>
            <Route path="/edit" component={Edit}></Route>
            <Route path="/louceng" component={Lou}></Route>
            <Redirect  from="/" to="/index" />
        </Switch>
    </Router>
}
export default RoootRouter