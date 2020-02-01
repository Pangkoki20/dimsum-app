import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button
} from "reactstrap";
import "./SenderStatus.css";
import axios from "axios";
class SenderStatus extends Component {
  state = {
    user: null,
    order: []
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
    let order = JSON.parse(localStorage.getItem("order"));
    console.log("all order : ", order);
    this.setState({ order: order });
  };
  render() {
    return (
      <div className="container-fluid ">
        <div className="text_senderstatus">อาหารพร้อมส่ง</div>
        <div className="card_senderstatus">
          <Card>
            <CardHeader>
              <Row>
                <Col xs="3">ลำดับ</Col>
                <Col>รายการ</Col>
                <Col xs="3">สถานะ</Col>
              </Row>
            </CardHeader>
            {this.state.order.map((e, index) => {
              return (
                <div key={index + 1}>
                  <CardBody>
                    <Row>
                      <Col>{index + 1}</Col>
                      <Col xs="3">
                        <Button color="danger" outline href="SenderOrder">
                          พร้อมส่งอาหาร
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </div>
              );
            })}
          </Card>
          <br></br>
        </div>
      </div>
    );
  }
}
export default SenderStatus;
