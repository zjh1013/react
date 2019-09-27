import React from 'react'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import routes from './routerConfig'
import RouterView from './routerview'
console.log(routes);
function RootRouter(props){
    return <BrowserRouter>
            <RouterView routes={routes}/>
    </BrowserRouter>
}



export default RootRouter;