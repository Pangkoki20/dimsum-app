import React from "react";
import { Container } from "reactstrap";
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
        {/* <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link" href="/Menu">
              <h5 className="fon-barmenu">เมนูแนะนำ</h5>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Dimsum">
              <h5 className="fon-barmenu">ติ่มซำ</h5>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Breakfast">
              <h5 className="fon-barmenu">อาหารเช้า</h5>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Fried">
              <h5 className="fon-barmenu">ของทอด</h5>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Breakfast">
              <h5 className="fon-barmenu">อาหารจานเดียว</h5>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Drink">
              <h5 className="fon-barmenu">เครื่องดื่ม</h5>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Other">
              <h5 className="fon-barmenu">อื่น ๆ</h5>
            </a>
          </li>
        </ul> */}
      </Container>
    );
  }
}
export default Navbars;
