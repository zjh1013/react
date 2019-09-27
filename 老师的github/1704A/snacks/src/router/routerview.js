import React from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
function RouterView(props){
    let {routes} = props;
    let routeArr = routes && routes.filter(item => !item.redirect);
    let redirectArr =routes &&  routes.filter(item => item.redirect).map((item,index) => <Redirect from={item.path} to={item.redirect} key={index}/>)
    return <Switch>
            {
                routeArr && routeArr.map((item,index) => <Route key={index} path={item.path} render={(props)=>{
                    return <item.component {...props} child={item.children}/>
                }}/>).concat(redirectArr)
            }
        </Switch>
}

export default RouterView;