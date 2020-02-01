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
import "./SenderOrder.css";
class SenderOrder extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="text_senderorder">ข้อมูลของลูกค้า </div>

        <Card className="card_orderkitchen">
          <CardHeader>
            <Row>
              <Col>รายละเอียด</Col>
              <Col xs="3">สถานะ</Col>
            </Row>
          </CardHeader>
          <div>
            <CardBody>
              <Row>
                <Col></Col>
                <Col xs="3">
                  <Button color="danger" outline href="/OrderFood">
                    กำลังจัดส่งอาหาร
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </div>
        </Card>
        <br></br>
      </div>
    );
  }
}
export default SenderOrder;
