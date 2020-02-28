import React, { Component } from "react";
import { Card, CardHeader, CardBody, Row, Col, Button } from "reactstrap";
import "./MenuOrder.css";
import axios from "axios";
class MenuOrder extends Component {
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
    // let order = JSON.parse(localStorage.getItem("order"));
    // console.log("all order : ", order);
    // this.setState({ order: order });
    let order = await axios.get(`http://localhost:3001/api/order`);
    this.setState({ order: order.data });
    let menu = await axios.get(`http://localhost:3001/api/menu`);
    this.setState({ menu: menu.data });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="text_orderkitchen">รายการอาหาร</div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Card className="card_orderkitchen">
              <CardHeader>
                <Row>
                  <Col xs="3">order_id</Col>
                  <Col>รายการ</Col>
                  <Col xs="3">สถานะ</Col>
                </Row>
              </CardHeader>
              {this.state.menu.map((e, index) => {
                if (
                  // e.order_id !==
                  // this.state.order.map(item => {
                  //   return item.id;
                  // })
                  e.order_id == this.props.match.params.orderid &&
                  this.state.order.find(order => order.id == e.order_id) &&
                  this.state.order.find(order => order.id == e.order_id)
                    .user_id == this.props.match.params.userid
                ) {
                  console.log(
                    "e.order_id = ",
                    e.order_id,
                    " ",
                    "urlorder = ",
                    this.props.match.params.orderid,
                    " ",
                    this.state.order.find(order => order.id == e.order_id) &&
                      this.state.order.find(order => order.id == e.order_id)
                        .user_id
                  );
                  if (index === 0) {
                  }
                  return (
                    <div key={index + 1}>
                      <CardBody>
                        <Row>
                          <Col xs="3"> {e.order_id}</Col>
                          <Col>{e.namefood} </Col>
                          <Col xs="3">
                            <Button color="danger" outline href="">
                              รับรายการอาหาร
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
            <Button
              className="bt_foodready"
              color="primary"
              size="lg"
              block
              href="/KitchenFoodFinish"
            >
              อาหารพร้อมส่ง
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default MenuOrder;
