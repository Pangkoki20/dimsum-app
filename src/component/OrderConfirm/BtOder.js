import React, { Component } from "react";
import { Row, Col, Button, Contrainer } from "reactstrap";
import "./BtOder.css";
class BtOrder extends Component {
  render() {
    return (
      <Row className="tabel_btcon justify-content-md-center">
        <Col className="col-auto">
          <Button color="info" size="lg" block href="/OrderConfirm">
            ย้อนกลับ
          </Button>
        </Col>
        <Col className="col-auto">
          <Button outline color="info" size="lg" block href="/Basket">
            แก้ไขรายการสั่งอาหาร
          </Button>
        </Col>
        <Col className="col-auto">
          <Button color="info" size="lg" block href="/Payment">
            ต่อไป
          </Button>
        </Col>
      </Row>
    );
  }
}
export default BtOrder;
