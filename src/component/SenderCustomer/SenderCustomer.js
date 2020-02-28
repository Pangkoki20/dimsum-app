import React, { Component } from "react";
import { Card, CardHeader, CardBody, Row, Col, Button } from "reactstrap";
import "./SenderCustomer.css";
class SenderCustomer extends Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="text_senderstatus">รายละเอียดการส่งอาหาร</div>
        <div className="card_sendercustomer">
          <Col xs="8">
            <Card>
              <CardHeader>
                <Row>
                  <Col>รายการ</Col>
                  <Col xs="3">สถานะ</Col>
                </Row>
              </CardHeader>
              <div>
                <CardBody>
                  <Row>
                    <Col xs="3"></Col>
                    <Col></Col>
                    <Col xs="3"></Col>
                  </Row>
                </CardBody>
              </div>
            </Card>
          </Col>
          <br></br>
          <Button
            className="bt_already"
            color="primary"
            size="lg"
            block
            href="/SenderFoodDelivery"
          >
            เรียบร้อยแล้ว
          </Button>
        </div>
      </div>
    );
  }
}
export default SenderCustomer;
