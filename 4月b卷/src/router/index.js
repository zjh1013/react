import React from 'react'
import {BrowserRouter as Router, Switch,Route,Redirect} from 'react-router-dom'
import Index from '../views/index'

function RootRouter () {
    return <Router>
        <Switch>
            <Route path="/index" component={Index} ></Route>

            <Redirect from="/" to="/index"></Redirect>
        </Switch>
    </Router>
}
export default RootRouter