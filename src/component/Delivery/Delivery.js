import React, { Component } from "react";
import {
  Container,Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import "./Delivery.css";

class Delivery extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="text_status">สถานะการจัดส่ง</div>
        <div className="from_status">
          <Row>
            <Col>
              <Card body>
                ทางร้านได้รับ Order ของคุณแล้ว
              </Card>
            </Col>
            <Col>
              <Card body>
                กำลังจัดเตรียมอาหารของคุณ
              </Card>
            </Col>
            <Col>
              <Card body>อาหารของคุณพร้อมส่งถึงคุณ</Card>
            </Col>
            <Col>
              <Card body>อาหารกำลังไปส่งถึงคุณ</Card>
            </Col>
            <Col>
              <Card body>คุณได้รับอาหารแล้ว</Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Delivery;
