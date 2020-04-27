import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./Drink.css";
import DrinkChaice from "./DrinkChaice";
import DrinkCoffee from "./DrinkCoffee";
import DrinkChamanow from "./DrinkChamanow";
import DrinkOvantin from "./DrinkOvantin";
import DrinkGreentea from "./DrinkGreentea";
import DrinkChadum from "./DrinkChadum";
import MenuSelect from "../MenuSelect/MenuSelect";
class Drink extends Component {
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
    //   // if (!res) {
    //   //   window.location.href = "/login";
    //   //   return;
    //   // }
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
        <div className="container">
          <div className="textname-drink">เครื่องดื่ม</div>
          <Row>
            <Col xs="6" sm="4">
              <DrinkChaice />
            </Col>
            <Col xs="6" sm="4">
              <DrinkCoffee />
            </Col>
            <Col xs="6" sm="4">
              <DrinkChamanow />
            </Col>
            <Col xs="6" sm="4">
              <DrinkOvantin />
            </Col>
            <Col xs="6" sm="4">
              <DrinkGreentea />
            </Col>
            <Col xs="6" sm="4">
              <DrinkChadum />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Drink;
