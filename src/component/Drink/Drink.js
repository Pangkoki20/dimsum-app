import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Drink_Chaice from "./Drink_Chaice";
import "./Drink.css";
import Drink_Coffee from "./Drink_Coffee";
import Drink_chamanow from "./Drink_chamanow";
import Drink_Ovantin from "./Drink_Ovantin";
import Drink_Greentea from "./Drink_Greentea";
import Drink_Chadum from "./Drink_Chadum";
import MenuSelect from "../MenuSelect/MenuSelect";
class Drink extends Component {
  componentDidMount() {
    document.title = "Dimsumahkong Delivery";
    // var oldItems = []
    var oldItems = JSON.parse(localStorage.getItem("order"));
    console.log("old first :", oldItems);

    if (oldItems == null) {
      var oldItems = [];
      localStorage.setItem("order", JSON.stringify(oldItems));
    } else {
      var oldItems = JSON.parse(localStorage.getItem("order")) || [];
    }
    // var oldItems = JSON.parse(localStorage.getItem('order')) || [];
  }
  render() {
    return (
      <div>
        <MenuSelect />
        <div>
          <div className="textname-drink">เครื่องดื่ม</div>
          <div className="menuform">
            <Row>
              <Col xs="6" sm="4">
                <Drink_Chaice />
              </Col>
              <Col xs="6" sm="4">
                <Drink_Coffee />
              </Col>
              <Col xs="6" sm="4">
                <Drink_chamanow />
              </Col>
              <Col xs="6" sm="4">
                <Drink_Ovantin />
              </Col>
              <Col xs="6" sm="4">
                <Drink_Greentea />
              </Col>
              <Col xs="6" sm="4">
                <Drink_Chadum />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
export default Drink;
