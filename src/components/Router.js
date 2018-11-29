import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import App from './App/App'
import Signup from './Signup/Signup'

const Router = () => (
  <BrowserRouter>
    <Switch>
      // <Route exact path = '/' component={Signup}/>
      <Route path = '/emojis' component={App}/>
    </Switch>
  </BrowserRouter>
)

export default Router
