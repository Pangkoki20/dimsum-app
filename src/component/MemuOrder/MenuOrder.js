import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
  CardText
} from "reactstrap";
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
        <div className="text_orderkitchen">รายการอาหารที่เข้ามา</div>
        <div className="row">
          <div className="col-12 col-md-8">
            <Card className="card_orderkitchen">
              <CardHeader>
                <Row>
                  <Col xs="3">ลำดับที่</Col>
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
          </div>
          <div class="col-6 col-md-4 ">
            <div className="from_money">
              <Card>
                {/* <CardHeader className="text_money">Order</CardHeader> */}
                <div className="table_num">
                  <div className="d-flex">
                    <div className="col-6">
                      <CardText className="tt_food ">Order ทั้งหมด</CardText>
                    </div>
                    <div className="col">
                      <CardText className="tt_food text_num">
                        {this.state.order.length}
                      </CardText>
                    </div>
                    <div className="col">
                      <CardText className="tt_food text_unit">Order</CardText>
                    </div>
                  </div>
                </div>
                <div className="table_num">
                  <div className="d-flex">
                    <div className="col-6">
                      <CardText className="tt_food">Order ที่รับแล้ว</CardText>
                    </div>
                    <div className="col">
                      <CardText className="tt_food text_num"></CardText>
                    </div>
                    <div className="col">
                      <CardText className="tt_food text_unit">Order</CardText>
                    </div>
                  </div>
                </div>
                <div className="table_num">
                  <div className="d-flex">
                    <div className="col-6">
                      <CardText className="tt_food">
                        Order ที่ยังไม่รับ
                      </CardText>
                    </div>
                    <div className="col">
                      <CardText className="tt_food text_num"></CardText>
                    </div>
                    <div className="col">
                      <CardText className="tt_food text_unit">Order</CardText>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MenuOrder;
