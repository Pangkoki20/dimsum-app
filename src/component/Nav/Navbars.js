import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import "./Nav.css";

class Navbars extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="colorbar" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto nav" navbar>
              <NavItem>
                <NavLink href="/">
                  <button type="button" class="btn btn-outline-info">
                    {" "}
                    เมนูแนะนำ
                  </button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="Dimsum">
                  <button type="button" class="btn btn-outline-info">
                    {" "}
                    ติ่มซำ
                  </button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="Breakfast">
                  <button type="button" class="btn btn-outline-info">
                    {" "}
                    อาหารเช้า
                  </button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="Fastfood">
                  <button type="button" class="btn btn-outline-info">
                    {" "}
                    อาหารจานเดียว
                  </button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="Drink">
                  <button type="button" class="btn btn-outline-info">
                    {" "}
                    เครื่องดื่ม
                  </button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="Delivery">
                  <button type="button" class="btn btn-outline-info">
                    {" "}
                    สถานะการจัดส่ง
                  </button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="Contact">
                  <button type="button" class="btn btn-outline-info">
                    {" "}
                    ติดต่อเรา
                  </button>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navbars;
