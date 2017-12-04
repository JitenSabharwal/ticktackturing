import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Template from '../containers/Template'
const createRoutes = () => {
  return (
  <Switch>
    <Route exact path="/" component={Template}/>
    <Route  path="/home" component={Template}/>
  </Switch>
)}
console.log('Routes')
const Routes = createRoutes()
export default Routes
