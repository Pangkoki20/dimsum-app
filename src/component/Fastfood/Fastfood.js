import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
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
        <Container>
          <div className="textname-fastfood">อาหารจานเดียว</div>

          <Row xs="3">
            <Col sm="4">
              <FastFoodBabutte />
            </Col>
            <Col sm="4">
              <FastFoodChicken />
            </Col>
            <Col sm="4">
              <FastFoodDuck />
            </Col>
          </Row>
          <Row xs="3">
            <Col sm="4">
              <FastFoodPorkleg />
            </Col>
            <Col sm="4">
              <FastFoodRedpork />
            </Col>
            <Col sm="4">
              <FastFoodCrispypork />
            </Col>
            {/* <Col>
              <FastFoodRice />
            </Col> */}
          </Row>
        </Container>
      </div>
    );
  }
}
export default Fastfood;
