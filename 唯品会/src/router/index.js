import React from 'react'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import Shou from '../view/shouye'
import Fen from '../view/fenlei'
import Shop from '../view/shop'
import Ge from '../view/geren'
import Detail from '../view/detail'
import Xiang from '../view/xiangqing'
import Login from '../view/login'
function RootRouter () {
    return <Router>
        <Switch>
            <Route path='/shouye' component={Shou}></Route>
            <Route path='/fenlei' component={Fen}></Route>
            <Route path='/shop' component={Shop}></Route>
            <Route path='/geren' component={Ge}></Route>
            <Route path='/detail' component={Detail}></Route>
            <Route path='/xiangqing' component={Xiang}></Route>
            <Route path='/login' component={Login}></Route>
            <Redirect to='/fenlei'></Redirect>
        </Switch>
    </Router>

}
export default RootRouter