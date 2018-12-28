import React, { Component } from 'react';

import { Home } from 'pages/home'
import { Search,SearchItem } from 'pages/search'
import { SignConenter } from 'pages/sign'

import { Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Switch>
          <Redirect exact from="/" to="/home"></Redirect>
          <Route path="/home" component={Home}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/searchitem/:id" component={SearchItem}></Route>
          <Route path="/sign" component={SignConenter}></Route>
      </Switch>
    );
  }
}

export default App;
