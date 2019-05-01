import React, { Component } from 'react'
import { Form, FormGroup, Input, Container, Button } from 'reactstrap'
import axios from 'axios'
import './Register.css'
class Register extends Component {
	constructor(props) {
		super(props)
		this.state = {
			firstname: '',
			lastname: '',
			email: '',
			password: '',
			message: ''
		}
	}
	handleInputChange = e => {
		const { name, value } = e.target
		this.setState({ [name]: value })
		this.setState({ message: '' })
		console.log({ [name]: value })
	}
	register = e => {
		console.log(' fuck !!')

		e.preventDefault()
		try {
			const data = {
				firstname: this.state.firstname,
				lastname: this.state.lastname,
				email: this.state.email,
				password: this.state.password
			}

			axios.post(`http://localhost:3001/api/users/create`, data).then(res => {
				const { data } = res
				this.setState({ message: data.message })
				this.props.history.push(`/`)
			})
		} catch (error) {
			console.log('Error : ', error)
		}
	}
	render() {
		const { firstname, lastname, email, password } = this.state
		return (
			<Container className="log">
				<Form className="form-login" onSubmit={this.register}>
					<FormGroup>
						<h2>
							<b>Register</b>
						</h2>
						<Input
							className=""
							type="text"
							name="firstname"
							value={firstname}
							placeholder="Firstname"
							onChange={this.handleInputChange}
							required
						/>
						<Input
							className=""
							type="text"
							name="lastname"
							value={lastname}
							placeholder="Lastname"
							onChange={this.handleInputChange}
							required
						/>
						<Input className="" type="email" name="email" value={email} placeholder="e-mail" onChange={this.handleInputChange} required />
						<Input
							className=""
							type="password"
							name="password"
							value={password}
							placeholder="password"
							onChange={this.handleInputChange}
							required
						/>
					</FormGroup>
					<Button color="success">Register</Button>
				</Form>
			</Container>
		)
	}
}
export default Register
