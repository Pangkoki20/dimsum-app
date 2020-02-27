import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./Breakfast.css";
import Break_fast from "./Break_fast";
import Break_egg from "./Break_egg";
import Break_fish from "./Break_fish";
import Break_shrimp from "./Break_shrimp";
import MenuSelect from "../MenuSelect/MenuSelect";
import axios from "axios";
class Breakfast extends Component {
  state = {
    order: []
  };
  componentDidMount = async nextProps => {
    let order = JSON.parse(localStorage.getItem("order"));
    this.setState({ order: order });
    let token = localStorage.getItem("token");
    if (token) {
      if (token !== null) {
        this.setState({ check: "login" });
      }
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
      var oldItems = [];
      localStorage.setItem("order", JSON.stringify(oldItems));
    } else {
      var oldItems = JSON.parse(localStorage.getItem("order")) || [];
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
