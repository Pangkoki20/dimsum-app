import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./Breakfast.css";
import Break_fast from "./Break_fast";
import Break_egg from "./Break_egg";
import Break_fish from "./Break_fish";
import Break_shrimp from "./Break_shrimp";
import MenuSelect from "../MenuSelect/MenuSelect";
class Breakfast extends Component {
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
          <div className="textname-breakfast">อาหารเช้า</div>
          <div className="menuform">
            <Row>
              <Col xs="6" sm="4">
                <Break_fast />
              </Col>
              <Col xs="6" sm="4">
                <Break_egg />
              </Col>
              <Col xs="6" sm="4">
                <Break_fish />
              </Col>
              <Col xs="6" sm="4">
                <Break_shrimp />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
export default Breakfast;
