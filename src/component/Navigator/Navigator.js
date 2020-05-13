import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import "./Navigator.css";
import auth from "../service";
import token from "../../component/service";
export default class Navigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      check: "",
      nameLogin: "",
      role: "",
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  logout = (e) => {
    auth.clearToken();
    this.props.history.push("/");
  };
  componentDidMount = async (nextProps) => {};

  render() {
    if (localStorage.getItem("token")) {
      if (
        token.decodeToken(localStorage.getItem("token")).role !==
        this.state.role
      ) {
        this.setState({
          role: token.decodeToken(localStorage.getItem("token")).role,
          check: "login",
        });
      }
    }
    return (
      <div>
        <Navbar className="bar" light expand="md">
          <NavbarBrand>
            <NavbarBrand href="/">
              <span className="fon-bar"> Dimsumahkong Delivery</span>
            </NavbarBrand>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">
                  <div className="fon-barr">หน้าหลัก</div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Menu">
                  <div className="fon-barr">สั่งอาหาร</div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Contact">
                  <div className="fon-barr">ติดต่อเรา</div>
                </NavLink>
              </NavItem>

              {this.state.role === "admin" && this.state.check === "login" && (
                <NavItem>
                  <NavLink>
                    <div className="Login">
                      <div className="fon-barr">ADMIN </div>
                    </div>
                  </NavLink>
                </NavItem>
              )}
              {this.state.role === "sender" && this.state.check === "login" && (
                <NavItem>
                  <NavLink>
                    <div className="Login">
                      <div className="fon-barr">Sender</div>
                    </div>
                  </NavLink>
                </NavItem>
              )}
              {this.state.role === "kitchen" && this.state.check === "login" && (
                <NavItem>
                  <NavLink>
                    <div className="fon-barr">Kitchen</div>
                  </NavLink>
                </NavItem>
              )}

              {this.state.check !== "login" && (
                <NavItem>
                  <NavLink href="/Login">
                    <div className="bt_login">
                      <Button color=" primary">เข้าสู่ระบบ</Button>
                    </div>
                    {/* <img className="login " src={login} /> */}
                  </NavLink>
                </NavItem>
              )}
              {this.state.check === "login" && (
                <NavItem>
                  <NavLink href="/" onClick={this.logout}>
                    <div className="Login fon-logout">
                      <Button color="info">Logout</Button>
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
