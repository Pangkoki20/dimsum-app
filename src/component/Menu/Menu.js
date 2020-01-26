import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./Menu.css";
import MenuSelect from "../MenuSelect/MenuSelect";
import MenuNewPoo from "./MenuNewPoo";
import MenuNewBuk from "./MenuNewBuk";
import MenuNewEgg from "./MenuNewEgg";
import MenuNewKanomgee from "./MenuNewKanomgee";
import MenuNewSarapol from "./MenuNewSarapol";
import MenuNewEggpan from "./MenuNewEngpan";
import axios from "axios";
class Menu extends Component {
  state = {
    user: null
  };
  onUserChanged = user => {
    this.setState({ user });
  };
  componentDidMount = async nextProps => {
    let token = localStorage.getItem("token");
    if (token) {
      if (token !== null) {
        this.setState({ check: "login" });
      }
      console.log("me");
      let res = await axios.post(`http://localhost:3001/api/users/me`, {
        token
      });
      // if (!res) {
      //   window.location.href = "/login";
      //   return;
      // }
      this.setState({ user: res.data });
    } else {
      window.location.href = "/login";
    }
    document.title = "Dimsumahkong Delivery";
    // var oldItems = []
    var oldItems = JSON.parse(localStorage.getItem("order"));
    console.log("old first :", oldItems);

    if (oldItems == null) {
      oldItems = [];
      localStorage.setItem("order", JSON.stringify(oldItems));
    } else {
      oldItems = JSON.parse(localStorage.getItem("order")) || [];
    }
    // var oldItems = JSON.parse(localStorage.getItem('order')) || [];
  };
  render() {
    return (
      <div>
        <MenuSelect />
        <div className="menuform">
          <div className="text-menu">เมนูแนะนำ</div>
          <Row>
            <Col xs="6" sm="4">
              <MenuNewSarapol />
            </Col>
            <Col xs="6" sm="4">
              <MenuNewEgg />
            </Col>
            <Col xs="6" sm="4">
              <MenuNewEggpan />
            </Col>
            <Col xs="6" sm="4">
              <MenuNewBuk />
            </Col>
            <Col xs="6" sm="4">
              <MenuNewPoo />
            </Col>
            <Col xs="6" sm="4">
              <MenuNewKanomgee />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Menu;
