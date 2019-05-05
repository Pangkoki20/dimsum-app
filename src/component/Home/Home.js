import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import './Home.css'
import auth from '../service'
export default class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: false,
			check: '',
			nameLogin: ''
		}
		this.toggle = this.toggle.bind(this)
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	logout = e => {
		auth.clearToken()
		this.props.history.push('/')
	}
	componentDidMount = e => {}

	componentWillReceiveProps = nextProps => {
		if (nextProps.user !== null) {
			this.setState({ check: 'login' })
		}
	}

	render() {
		return (
			<div>
				<Navbar color="navbar navbar-dark bg-dark" light expand="md">
					<NavbarBrand href="/">Dimsumahkong Delivery</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="overview">
									<div className="login">
										<b>Overview</b>
									</div>
								</NavLink>
							</NavItem>

							{this.state.check !== 'login' && (
								<NavItem>
									<NavLink href="login">
										<div className="login">
											<b>เข้าสู่ระบบ</b>
										</div>
									</NavLink>
								</NavItem>
							)}

							{this.state.check === 'login' && (
								<NavItem>
									<NavLink href="" onClick={this.logout}>
										<div className="login">
											<b>ออกจากระบบ</b>
										</div>
									</NavLink>
								</NavItem>
							)}

							{/* <NavItem>
								<NavLink href="">
									<div className="basket">
										<i className="fas fa-cart-arrow-down" />
									</div>
								</NavLink>
							</NavItem> */}
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		)
	}
}
