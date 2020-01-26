import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./Fastfood.css";
import Paginat from "../Paginat/Paginat";
import Fast_Chicken from "./Fast_Chicken";
import Fast_Rice from "./Fast_Rice";
import Fast_Babutte from "./Fast_Babutte";
import Fast_Duck from "./Fast_Duck";
import Fast_Porkleg from "./Fast_Porkleg";
import Fast_Redpork from "./Fast_Redpork";
import Fast_Crispypork from "./Fast_Crispypork";
import BTHome from "../BTHome/BTHome";
import MenuSelect from "../MenuSelect/MenuSelect";
import axios from "axios";
class Fastfood extends Component {
  state = {
    user: null
  };
  onUserChanged = user => {
    this.setState({ user });
  };
  componentDidMount = async nextProps => {
    let token = localStorage.getItem("token");
    if (token) {
      if (token !== null) {
        this.setState({ check: "login" });
      }
      console.log("me");
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
    return (
      <div>
        <MenuSelect />
        <div>
          <div className="textname-fastfood">อาหารจานเดียว</div>
          <div className="menuform">
            <Row>
              <Col xs="6" sm="4">
                <Fast_Babutte />
              </Col>
              <Col xs="6" sm="4">
                <Fast_Chicken />
              </Col>
              <Col xs="6" sm="4">
                <Fast_Duck />
              </Col>
              <Col xs="6" sm="4">
                <Fast_Porkleg />
              </Col>
              <Col xs="6" sm="4">
                <Fast_Redpork />
              </Col>
              <Col xs="6" sm="4">
                <Fast_Crispypork />
              </Col>
              <Col xs="6" sm="4">
                <Fast_Rice />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
export default Fastfood;
