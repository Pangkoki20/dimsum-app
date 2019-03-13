import React, {Component} from 'react'
import Home from './component/Home/Home'
import Banner from './component/Banner/Banner'

class App extends Component {
    render(){
      return(
        <div>
          <Home/>
          <Banner/>
        </div>
      );
    }
}

export default App 