import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Increment, Todo } from '../pages/'

export const Router: React.SFC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Todo} />
      <Route path="/increment" component={Increment} />
    </Switch>
  </BrowserRouter>
)
