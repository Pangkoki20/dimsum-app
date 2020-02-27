import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Container,
  Button
} from "reactstrap";
import "./SenderCustomer.css";
class SenderCustomer extends Component {
  render() {
    return (
      <Container className="themed-container" fluid="sm">
        <Card className="card_orderkitchen">
          <CardHeader>
            <div className="text_orderkitchen">ข้อมูลของลูกค้า</div>
          </CardHeader>

          <CardBody>
            <Row>
              <Col></Col>
              <Col xs="3"></Col>
            </Row>
          </CardBody>
        </Card>

        <br></br>
        <div className="bt_shipping">
          <Button outline color="danger" href="/SenderFoodDelivery">
            กำลังจัดส่ง
          </Button>
        </div>
      </Container>
    );
  }
}
export default SenderCustomer;
