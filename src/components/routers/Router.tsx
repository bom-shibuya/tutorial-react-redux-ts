import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Counter, Todo } from '../pages/'

export const Router: React.SFC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Todo} />
      <Route path="/counter" component={Counter} />
    </Switch>
  </BrowserRouter>
)
