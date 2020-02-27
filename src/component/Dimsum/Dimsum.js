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
import axios from "axios";
class Dimsum extends Component {
  state = {
    order: []
  };
  onUserChanged = user => {
    this.setState({ user });
  };
  componentDidMount = async nextProps => {
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
        token
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
