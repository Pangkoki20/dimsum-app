import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
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
    order: [],
  };
  onUserChanged = (user) => {
    this.setState({ user });
  };
  componentDidMount = async (nextProps) => {
    let order = JSON.parse(localStorage.getItem("order"));
    this.setState({ order: order });
    // let token = localStorage.getItem("token");
    // if (token) {
    //   if (token !== null) {
    //     this.setState({ check: "login" });
    //   }
    //   let order = JSON.parse(localStorage.getItem("order"));
    //   this.setState({ order: order });
    //   let token = localStorage.getItem("token");
    //   let res = await axios.post(`http://localhost:3001/api/users/me`, {
    //     token,
    //   });
    //   this.setState({ user: res.data });
    // } else {
    //   window.location.href = "/login";
    // }
    document.title = "Dimsumahkong Delivery";
    // var oldItems = []
    var oldItems = JSON.parse(localStorage.getItem("order"));
    console.log("old first :", oldItems);

    if (oldItems == null) {
      oldItems = [];
      localStorage.setItem("order", JSON.stringify(oldItems));
    } else {
      oldItems = JSON.parse(localStorage.getItem("order")) || [];
    } // var oldItems = JSON.parse(localStorage.getItem('order')) || [];
  };
  render() {
    const numberOfMenus = this.state.order.reduce(
      (acc, next) => acc + next.menu_value,
      0
    );
    return (
      <div>
        <MenuSelect numberOnBucket={numberOfMenus} />
        <div className="text-menu">เมนูแนะนำ</div>
        <Container>
          <Row xs="3">
            <Col sm="4">
              <MenuNewSarapol />
            </Col>
            <Col sm="4">
              <MenuNewEgg />
            </Col>
            <Col sm="4">
              <MenuNewEggpan />
            </Col>
          </Row>
          <Row xs="3">
            <Col sm="4">
              <MenuNewBuk />
            </Col>
            <Col sm="4">
              <MenuNewPoo />
            </Col>
            <Col sm="4">
              <MenuNewKanomgee />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Menu;
