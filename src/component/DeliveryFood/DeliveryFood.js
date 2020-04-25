import React, { Component } from "react";
import { Card, CardHeader, Row, Col } from "reactstrap";
import "./DeliveryFood.css";
class DeliveryFood extends Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="text_senderstatus">ข้อมูลลูกค้า</div>
        <div className="row fromDeliveryfood">
          <div className="col-md-6 offset-md-3 ">
            <Card className="carddeliveryfood ">
              <CardHeader>
                <Row>
                  <Col xs="3">Order_id</Col>
                  <Col>ข้อมูลของลูกค้า</Col>
                </Row>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
export default DeliveryFood;
