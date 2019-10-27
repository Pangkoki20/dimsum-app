import React, { Component } from "react";
import {
  Row,
  Col,
  Container,
  Card,
  CardText,
  CardTitle,
  Button
} from "reactstrap";
import "./Menu.css";
import MenuSelect from "../MenuSelect/MenuSelect";
import MenuNewPoo from "./MenuNewPoo";
import MenuNewBuk from "./MenuNewBuk";
import MenuNewEgg from "./MenuNewEgg";
import MenuNewKanomgee from "./MenuNewKanomgee";
import MenuNewSarapol from "./MenuNewSarapol";
import MenuNewEggpan from "./MenuNewEngpan";
class Menu extends Component {
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
      <div >
        <MenuSelect />
        <div className="menuform">
          <h1 className="text-menu">เมนูแนะนำ</h1>
          <Row>
            <Col xs="6" sm="4">
              <MenuNewPoo />
            </Col>
            <Col xs="6" sm="4">
              <MenuNewBuk />
            </Col>
            <Col xs="6" sm="4">
              <MenuNewEgg />
            </Col>
            <Col xs="6" sm="4">
              <MenuNewKanomgee />
            </Col>
            <Col xs="6" sm="4">
              <MenuNewSarapol />
            </Col>
            <Col xs="6" sm="4">
              <MenuNewEggpan />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Menu;
