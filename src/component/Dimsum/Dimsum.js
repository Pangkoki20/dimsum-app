import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import "./Dimsum.css";
import PorkDumpling from "./PorkDumpling";
import PorkEggDumpling from "./PorkEggDumpling";
import PooDumpling from "./PooDumpling";
import ShrimpJeeb from "./ShrimpJeeb";
import HargaoShrimp from "./HargaoShrimp";
import ShrimpDumling from "./ShrimpDumling";
import MenuSelect from "../MenuSelect/MenuSelect";
import axios from "axios";
class Dimsum extends Component {
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
    } // var oldItems = JSON.parse(localStorage.getItem('order')) || [];
  };
  render() {
    const numberOfMenus = this.state.order.reduce(
      (acc, next) => acc + next.menu_value,
      0
    );
    return (
      <div>
        <MenuSelect numberOnBucket={numberOfMenus} />
        <div className="textname-dimsum">ติ่มซำ </div>
        <Container>
          <Row xs="3">
            <Col sm="4">
              <PorkDumpling />
            </Col>
            <Col sm="4">
              <PorkEggDumpling />
            </Col>
            <Col sm="4">
              <PooDumpling />
            </Col>
          </Row>
          <Row xs="3">
            <Col sm="4">
              <ShrimpDumling />
            </Col>
            <Col sm="4">
              <HargaoShrimp />
            </Col>
            <Col sm="4">
              <ShrimpJeeb />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Dimsum;
