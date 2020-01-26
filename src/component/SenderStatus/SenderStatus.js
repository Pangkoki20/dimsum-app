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
class SenderStatus extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="text_senderstatus">อาหารพร้อมส่ง</div>
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
                        ส่งอาหาร
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </div>
            </Card>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}
export default SenderStatus;
