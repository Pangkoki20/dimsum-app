import React, { Component } from 'react'
import Main from './Main'
import Login from './component/Login/Login';
import Home from './component/Home/Home'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}
export default App