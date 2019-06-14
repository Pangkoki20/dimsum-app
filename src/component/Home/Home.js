import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "./Home.css";
import auth from "../service";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      check: "",
      nameLogin: ""
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logout = e => {
    auth.clearToken();
    this.props.history.push("/");
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.user !== null) {
      this.setState({ check: "login" });
    }
  };

  render() {
    return (
      <div>
        <Navbar color="navbar navbar-dark bg-info" light expand="md">
          <NavbarBrand href="/"><b>Dimsumahkong Delivery</b></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.state.check !== "login" && (
                <NavItem>
                  <NavLink href="login">
                    <div className="login">
                      <b>Login</b>
                    </div>
                  </NavLink>
                </NavItem>
              )}

              {this.state.check === "login" && (
                <NavItem>
                  <NavLink href="" onClick={this.logout}>
                    <div className="login">
                      <b>Logout</b>
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
    );
  }
}
