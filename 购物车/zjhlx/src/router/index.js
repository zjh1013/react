import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import Shou from '../view/shouye'
import Shop from '../view/shop'

function RootRouter () {
    return <Router>
        <Switch>
            <Route path='/shouye' component={Shou}></Route>
            <Route path='/shop' component={Shop}></Route>
            <Redirect from='/' to='/shouye'></Redirect>
        </Switch>
    </Router>
}

export default RootRouter;