import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./Breakfast.css";
import BreakFastFood from "./BreakFastFood";
import BreakFastEgg from "./BreakFastEgg";
import BreakFastFish from "./BreakFastFish";
import BreakFastShrimp from "./BreakFastShrimp";
import BreakFastFreshSpring from "./BreakFastFreshSpring";
import BreakFastShrimpParcelFried from "./BreakFastShrimpParcelFried";
import MenuSelect from "../MenuSelect/MenuSelect";
import axios from "axios";
class Breakfast extends Component {
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
    }
    // var oldItems = JSON.parse(localStorage.getItem('order')) || [];
  };
  render() {
    const numberOfMenus = this.state.order.reduce(
      (acc, next) => acc + next.menu_value,
      0
    );
    console.log("number breakfast page: " + numberOfMenus);
    return (
      <div>
        <MenuSelect numberOnBucket={numberOfMenus} />
        <div className="container">
          <div className="textname-breakfast">อาหารเช้า</div>

          <Row>
            <Col xs="6" sm="4">
              <BreakFastFood />
            </Col>
            <Col xs="6" sm="4">
              <BreakFastEgg />
            </Col>
            <Col xs="6" sm="4">
              <BreakFastFish />
            </Col>
            <Col xs="6" sm="4">
              <BreakFastShrimp />
            </Col>
            <Col xs="6" sm="4">
              <BreakFastFreshSpring />
            </Col>
            <Col xs="6" sm="4">
              <BreakFastShrimpParcelFried />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Breakfast;
