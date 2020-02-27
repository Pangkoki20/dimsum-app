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
import auth from "../service/index";
class Menu extends Component {
  state = {
    order: []
  };
  onUserChanged = user => {
    this.setState({ user });
  };
  componentDidMount = async nextProps => {
    let order = JSON.parse(localStorage.getItem("order"));
    this.setState({ order: order });
    let token = localStorage.getItem("token");
    if (token) {
      if (token !== null) {
        this.setState({ check: "login" });
      }
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

    let user = auth.getToken();
    let userDecoded = auth.decodeToken(user);
    let uRole = userDecoded.role;
    // this.setState({ user: uRole });
    if (uRole === "sender") {
      this.props.history.push("/SenderStatus");
    }
  };
  render() {
    const numberOfMenus = this.state.order.reduce(
      (acc, next) => acc + next.menu_value,
      0
    );
    return (
      <div>
        <MenuSelect numberOnBucket={numberOfMenus} />
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
