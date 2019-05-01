import React, { Component } from 'react'
import Main from './Main'
import Login from './component/Login/Login'
import Home from './component/Home/Home'
import Register from './component/Register/Register'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Overview from './component/Overview/Overview'

class App extends Component {
	render() {
		return (
			<div>
				<Home />
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/overview" component={Overview} />
				</Switch>
			</div>
		)
	}
}
export default App
