import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Row,
  Col,
  Button
} from "reactstrap";
import "./MenuOrder.css";
import axios from "axios";

class MenuOrder extends Component {
  state = {
    order: [],
    priceAll: 0,
    total: 0,
    check: 1
  };

  componentDidMount = () => {
    axios.get(`http://localhost:3001/api/order`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="text_orderkitchen">รายการอาหารที่เข้ามา</div>
          <Card className="card_orderkitchen">
            <CardHeader>
              <Row>
                <Col xs="1">ลำดับ</Col>
                <Col>รายการ</Col>
                <Col sm="4">สถานะ</Col>
              </Row>
            </CardHeader>
            {this.state.order.map((e, index) => {
              return (
                <div key={index + 1}>
                  <CardBody>
                    <Row>
                      <Col> {index + 1}</Col>
                      <Col>{e.menu_name} </Col>
                      <Col> {e.menu_price}</Col>
                    </Row>
                  </CardBody>
                </div>
              );
            })}
          </Card>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}
export default MenuOrder;
