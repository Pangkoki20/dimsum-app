import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
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
    return (
      <div>
        <MenuSelect numberOnBucket={numberOfMenus} />
        <div className="textname-breakfast">อาหารเช้า</div>
        <Container>
          <Row xs="3">
            <Col>
              <BreakFastFood />
            </Col>
            <Col>
              <BreakFastEgg />
            </Col>
            <Col>
              <BreakFastFish />
            </Col>
          </Row>
          <Row xs="3">
            <Col>
              <BreakFastShrimp />
            </Col>
            <Col>
              <BreakFastFreshSpring />
            </Col>
            <Col>
              <BreakFastShrimpParcelFried />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Breakfast;
