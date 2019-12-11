import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';
import Form from './pages/form';
import Edit from './pages/edit';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/products/:id" component={Product} />
      <Route path="/form" component={Form} />
      <Route path="/edit" component={Edit} />
    </Switch>
  </BrowserRouter>
)

export default Routes;