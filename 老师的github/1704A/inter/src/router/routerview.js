import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

function RouterView(props){
    let {routes} = props;
    //所以不包含redirect
    let routerArr = routes && routes.filter(item => !item.redirect);
    //所有包含redirect
    let redirectArr = routes && routes.filter(item => item.redirect).map((item,index) => <Redirect from={item.path} to={item.redirect} key={index}/>)
    return <Switch>
            {
                routerArr && routerArr.map((item,index) => <Route key={index} path={item.path} render={(props)=>{
                    return <item.component {...props} child={item.children}/>
                }}/>).concat(redirectArr)
            }  
        </Switch>
}

export default RouterView;