import React, { Component } from "react";
import { Container, Table, Button, Row, Col } from "reactstrap";
import "./Dimsum.css";
// import Paginat from "../Paginat/Paginat";
import BTHome from "../BTHome/BTHome";
import Pork_Dumpling from "./Pork_Dumpling";
import Porkegg from "./Porkegg";
import Poo_Dumpling from "./Poo_Dumpling";
import Shrimp from "./Shrimp";
import Hargao from "./Hargao";
import Shrimp_Dumling from "./Shrimp_Dumling";
import MenuSelect from "../MenuSelect/MenuSelect";
class Dimsum extends Component {
  componentDidMount() {
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
  }
  render() {
    return (
      <div>
        <MenuSelect />
        <div>
          <div className="textname-dimsum">ติ่มซำ </div>
          <div className="menuform">
            <Row>
              <Col xs="6" sm="4">
                <Pork_Dumpling />
              </Col>
              <Col xs="6" sm="4">
                <Porkegg />
              </Col>
              <Col xs="6" sm="4">
                <Poo_Dumpling />
              </Col>
              <Col xs="6" sm="4">
                <Shrimp />
              </Col>
              <Col xs="6" sm="4">
                <Hargao />
              </Col>
              <Col xs="6" sm="4">
                <Shrimp_Dumling />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
export default Dimsum;
