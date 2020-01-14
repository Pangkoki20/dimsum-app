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
// import axios from "axios";

class MenuOrder extends Component {
  // state = {
  //   order: []
  // };
  // componentDidMount = () => {
  //   let order = JSON.parse(localStorage.getItem("order"));
  //   console.log("all order : ", order);
  //   this.setState({ order: order });
  // };
  render() {
    return (
      <div className="container-fluid">
        <div className="text_orderkitchen">
          รายการอาหารที่เข้ามา</div>
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
                  <div>
                    <CardBody>
                      <Row>
                        <Col></Col>
                        <Col>
                          <div></div>
                        </Col>
                        <Col xs="3">
                          <Button color="danger" outline href="/OrderFood">
                            รับรายการอาหาร
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </div>
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
                          <CardText className="tt_food ">
                            Order ทั้งหมด
                          </CardText>
                        </div>
                        <div className="col">
                          <CardText className="tt_food text_num"></CardText>
                        </div>
                        <div className="col">
                          <CardText className="tt_food text_unit">
                            Order
                          </CardText>
                        </div>
                      </div>
                    </div>
                    <div className="table_num">
                      <div className="d-flex">
                        <div className="col-6">
                          <CardText className="tt_food">
                            Order ที่รับแล้ว
                          </CardText>
                        </div>
                        <div className="col">
                          <CardText className="tt_food text_num"></CardText>
                        </div>
                        <div className="col">
                          <CardText className="tt_food text_unit">
                            Order
                          </CardText>
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
                          <CardText className="tt_food text_unit">
                            Order
                          </CardText>
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
