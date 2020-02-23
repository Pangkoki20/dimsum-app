import React, { Component } from "react";
import { Card, CardHeader, CardBody, Row, Col, Button } from "reactstrap";
import "./SenderStatus.css";
import axios from "axios";
class SenderStatus extends Component {
  state = {
    user: null,
    order: [],
    menu: []
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
    let order = await axios.get(`http://localhost:3001/api/order`);
    this.setState({ order: order.data });
    let menu = await axios.get(`http://localhost:3001/api/menu`);
    this.setState({ menu: menu.data });
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
            {this.state.menu.map((e, index) => {
              if (
                e.order_id !==
                this.state.order.map(item => {
                  return item.id;
                })
              ) {
                return (
                  <div key={index + 1}>
                    <CardBody>
                      <Row>
                        <Col xs="3"> {e.order_id}</Col>
                        <Col>{e.namefood} </Col>
                        <Col xs="3">
                          <Button color="danger" outline href="/OrderFood">
                            พร้อมส่งอาหาร
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </div>
                );
              } else {
                return false;
              }
            })}
          </Card>
          <br></br>
        </div>
      </div>
    );
  }
}
export default SenderStatus;
