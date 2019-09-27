import React from 'react'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import Home from '../views/home'
import Exam from '../views/exam'
function Router(){
    return <BrowserRouter>
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/exam/:id" component={Exam}/>
            <Redirect from="/" to="/home"/>
        </Switch>
    </BrowserRouter>
}


export default Router;