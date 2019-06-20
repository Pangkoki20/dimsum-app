import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
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
        <Navbar color="navbar navbar-expand-lg navbar-light bg light" light expand="md">
          <NavbarBrand href="/">
            <h4>Dimsumahkong Delivery</h4>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.state.check !== "login" && (
                <NavItem>
                  <NavLink href="login">
                    <div className="login">
                      <Button outline color="success">
                        Login
                      </Button>
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
