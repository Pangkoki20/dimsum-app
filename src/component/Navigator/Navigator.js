import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "./Navigator.css";
import auth from "../service";
import logo from "../../img/baker.png";
import axios from 'axios'
export default class Navigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      check: "",
      nameLogin: "",
      role : ""
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
 
  componentWillReceiveProps = async nextProps => {
    if (nextProps.user !== null) {
      this.setState({ check: "login" });
    }
    
    let token = localStorage.getItem("token");
    if(token){
      if (token !== null) {
        this.setState({ check: "login" });
      }

      let res = await axios.post(`http://localhost:3001/api/users/me`, { token });
       this.setState({ role: res.data.role });
    }
  };

  render() {
    console.log(this.state.role);
    
    return (
      <div>
        <Navbar className="bar" light expand="md">
          <NavbarBrand>
            <NavbarBrand href="/">
              <span className="fon-bar"> Dimsumahkong Delivery</span>
              {/* <span>
                <img className="pic-1" src={logo} />
              </span> */}
            </NavbarBrand>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="Contact">
                  <h6 className="fon-barr">ติดต่อเรา</h6>
                </NavLink>
              </NavItem>

              {this.state.role === "admin" && this.state.check === "login" && (
                <NavItem>
                  <NavLink>
                    <div className="Login">
                      <h6 className="fon-barr">ADMIN </h6>
                    </div>
                  </NavLink>
                </NavItem>
              )}

              {this.state.check !== "login" && (
                <NavItem>
                  <NavLink href="Login">
                    <div className="Login">
                      <h6 className="fon-barr">เข้าสู่ระบบ </h6>
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

        <Navbar />
      </div>
    );
  }
}
