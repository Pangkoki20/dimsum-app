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
import "./OrderFood.css";
class OrderFood extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="text_orderkitchen">จัดเตรียมอาหาร</div>
        <div className="row">
          <div className="col-12 col-md-8">
            <Card className="card_orderkitchen">
              <CardHeader>
                <Row>
                  <Col>รายการ</Col>
                  <Col xs="3">สถานะ</Col>
                </Row>
              </CardHeader>
              <div>
                <CardBody>
                  <Row>
                    <Col></Col>
                    <Col xs="3">
                      <Button color="danger" outline href="/OrderFood">
                        จัดเตรียมอาหาร
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
                      <CardText className="tt_food ">รหัสผู้ใช้</CardText>
                    </div>
                    <div className="col">
                      <CardText className="tt_food text_num"></CardText>
                    </div>
                  </div>
                </div>
                <div className="table_num">
                  <div className="d-flex">
                    <div className="col-6">
                      <CardText className="tt_food">วันที่สั่งอาหาร</CardText>
                    </div>
                    <div className="col">
                      <CardText className="tt_food text_num"></CardText>
                    </div>
                  </div>
                </div>
                <div className="table_num">
                  <div className="d-flex">
                    <div className="col-6">
                      <CardText className="tt_food">เวลาที่สั่งอาหาร</CardText>
                    </div>
                    <div className="col">
                      <CardText className="tt_food text_num"></CardText>
                    </div>
                  </div>
                </div>
                <div className="bt_readysend">
                  <div className="d-flex">
                    <div className="col">
                      <Button
                        color="info"
                        size="lg"
                        block
                        href="/KitchenFoodFinish"
                      >
                        อาหารพร้อมส่ง
                      </Button>
                    </div>
                  </div>
                </div>
                <br></br>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default OrderFood;
