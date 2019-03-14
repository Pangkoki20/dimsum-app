import React, {Component} from 'react'
import Main from './Main'
import Login from './component/Login/Login';

import { Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render(){
    return(
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App