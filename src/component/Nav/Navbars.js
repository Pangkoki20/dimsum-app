import React from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  Container
} from "reactstrap";
import "./Nav.css";
class Navbars extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Container>
      <div className="nav">
        <Nav tabs>
          <NavItem>
            <NavLink href="/">เมนูแนะนำ</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="Dimsum">ติ่มซำ</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="Breakfast">อาหารเช้า</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="Fastfood">อาหารจานเดียว</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="Drink">เครื่องดื่ม</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="Delivery">สถานะการจัดส่ง</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="Contact">ติดต่อเรา</NavLink>
          </NavItem>
        </Nav>
      </div>
      </Container>
    );
  }
}
export default Navbars;
