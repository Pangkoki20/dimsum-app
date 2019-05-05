import React, { Component } from 'react'
import Main from './Main'
import Login from './component/Login/Login'
import Overview from './component/Overview/Overview'
import Home from './component/Home/Home'
import Register from './component/Register/Register'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
class App extends Component {
	state = {
		user: null
	}

	onUserChanged = user => {
		this.setState({ user })
	}

	render() {
		const { user } = this.state

		return (
			<div>
				<Home user={user} />
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/login" component={() => <Login onUserChanged={this.onUserChanged} />} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/overview" component={Overview} />
				</Switch>
			</div>
		)
	}
}
export default App
