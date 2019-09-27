import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
function RouterView(props){
    console.log(props,'props');
    let {routes} = props;
    const routerArr = routes.filter((item,index) => !item.redirect);
    const redirectArr = routes.filter((item,index) => item.redirect);
    console.log(routerArr,redirectArr);
    return <Switch>
                {
                    routerArr && routerArr.map((item,index) =>  
                    <Route key={index} path={item.path} render={(props)=>{
                        return <item.component {...props} child={item.children}/>
                    }}/>)
                }
                {
                    redirectArr && redirectArr.map((item,index)=> <Redirect key={index} from={item.path} to={item.redirect}/>)
                }
        </Switch>
}

export default  RouterView;