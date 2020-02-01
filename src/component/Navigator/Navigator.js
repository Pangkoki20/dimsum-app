import React, {  } from "react";
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
import "./Navigator.css";
import login from "../../imghome/user.png";
import auth from "../service";
import axios from "axios";
export default class Navigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      check: "",
      nameLogin: "",
      role: ""
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
  //  componentWillReceiveProps;
  componentDidMount = async nextProps => {
    //  if (nextProps.user !== null) {
    //    this.setState({ check: "login" });
    //  }

    let token = localStorage.getItem("token");
    if (token) {
      if (token !== null) {
        this.setState({ check: "login" });
      }
      let res = await axios.post(`http://localhost:3001/api/users/me`, {
        token
      });
      this.setState({ role: res.data.role });    
    }
  };

  render() {
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
                <NavLink href="/">
                  <h6 className="fon-barr">หน้าหลัก</h6>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Menu">
                  <h6 className="fon-barr">สั่งอาหาร</h6>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Contact">
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
              {this.state.role === "sender" && this.state.check === "login" && (
                <NavItem>
                  <NavLink>
                    <div className="Login">
                      <h6 className="fon-barr">Sender</h6>
                    </div>
                  </NavLink>
                </NavItem>
              )}
              {this.state.role === "kitchen" && this.state.check === "login" && (
                <NavItem>
                  <NavLink>
                    <div className="Login">
                      <h6 className="fon-barr">Kitchen</h6>
                    </div>
                  </NavLink>
                </NavItem>
              )}

              {this.state.check !== "login" && (
                <NavItem>
                  <NavLink href="Login">
                    <div className="Login ">
                      <img className="login bt_login" src={login} />
                    </div>
                  </NavLink>
                </NavItem>
              )}
              {this.state.check === "login" && (
                <NavItem>
                  <NavLink href="" onClick={this.logout}>
                    <div className="Login fon-logout">
                      <Button color="info">
                        Logout
                      </Button>
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
