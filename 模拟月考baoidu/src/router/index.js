import React from 'react'
import {BrowserRouter as Router , Route , Switch ,Redirect} from 'react-router-dom'
import Home from '../view/home'
import Detail from '../view/detail'
import My from '../view/myshou'
function RootRouter () {
    return <Router>
        <Switch>
            <Route path='/home' component={Home}></Route>
            <Route path='/detail' component={Detail}></Route>
            <Route path='/myshou' component={My}></Route>
            <Redirect to='/home'></Redirect>
        </Switch>
    </Router>
}
export default RootRouter