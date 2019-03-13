import React, {Component} from 'react'
import Login from './component/Login'
import Home from './component/Home'
import 'bootstrap'

class App extends Component {
    render(){
      return(
        <div>
          <Login/>
          <Home/>
        </div>
      );
    }
}

export default App 