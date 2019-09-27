import React from 'react'
import {BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom'
import Shou from '../view/shouyi'
import Ji from '../view/jilu'
import Xiang from '../view/xiangqing'

function RootRouter () {
        return <Router>
            <Switch>
                <Route path='/shouyi' component={Shou}></Route>
                <Route path='/jilu' component={Ji}></Route>
                <Route path='/xiangqing' component={Xiang}></Route>
                <Redirect to='/shouyi'></Redirect>
            </Switch>
        </Router>
}
export default RootRouter