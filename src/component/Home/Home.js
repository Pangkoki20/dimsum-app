import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./Home.css";
import auth from "../service";
// import Menu from "../Menu/Menu";
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
        <Navbar className="bar" light expand="md">
          <NavbarBrand href="/Menu">
            <h4>Dimsumahkong Delivery</h4>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/Menu"><h6>หน้าแรก</h6></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="Contact"><h6>ติดต่อ</h6></NavLink>
              </NavItem>
              {this.state.check !== "login" && (
                <NavItem>
                  <NavLink href="Login">
                    <div className="Login">
                      <h6>เข้าสู่ระบบ </h6>
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
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
