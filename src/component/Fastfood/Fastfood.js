import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./Fastfood.css";
import FastFoodChicken from "./FastFoodChicken";
import FastFoodBabutte from "./FastFoodBabutte";
import FastFoodDuck from "./FastFoodDuck";
import FastFoodPorkleg from "./FastFoodPorkleg";
import FastFoodRedpork from "./FastFoodRedpork";
import FastFoodCrispypork from "./FastFoodCrispypork";
import MenuSelect from "../MenuSelect/MenuSelect";
import axios from "axios";
class Fastfood extends Component {
  state = {
    user: null,
    order: [],
  };
  onUserChanged = (user) => {
    this.setState({ user });
  };
  componentDidMount = async (nextProps) => {
    let order = JSON.parse(localStorage.getItem("order"));
    this.setState({ order: order });
    let token = localStorage.getItem("token");
    if (token) {
      if (token !== null) {
        this.setState({ check: "login" });
      }
      let order = JSON.parse(localStorage.getItem("order"));
      this.setState({ order: order });
      let token = localStorage.getItem("token");
      let res = await axios.post(`http://localhost:3001/api/users/me`, {
        token,
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
    const numberOfMenus = this.state.order.reduce(
      (acc, next) => acc + next.menu_value,
      0
    );
    return (
      <div>
        <MenuSelect numberOnBucket={numberOfMenus} />
        <div className="container">
          <div className="textname-fastfood">อาหารจานเดียว</div>

          <Row>
            <Col xs="6" sm="4">
              <FastFoodBabutte />
            </Col>
            <Col xs="6" sm="4">
              <FastFoodChicken />
            </Col>
            <Col xs="6" sm="4">
              <FastFoodDuck />
            </Col>
            <Col xs="6" sm="4">
              <FastFoodPorkleg />
            </Col>
            <Col xs="6" sm="4">
              <FastFoodRedpork />
            </Col>
            <Col xs="6" sm="4">
              <FastFoodCrispypork />
            </Col>
            {/* <Col xs="6" sm="4">
              <FastFoodRice />
            </Col> */}
          </Row>
        </div>
      </div>
    );
  }
}
export default Fastfood;
