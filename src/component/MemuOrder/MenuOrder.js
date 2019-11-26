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
    persons: []
  };

  componentDidMount = () => {
    axios.get(`http://localhost:3001/api/order`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  };

  render() {
    const table = this.state.persons.map((text, index) => {
      return (
        <div key={index + 1}>
          <CardBody>
            <Row>
              <Col xs="1">{index + 1}</Col>
              <Col>{text.user_id} </Col>
              <Col sm="4">
                <Button href="/EachMenu">รับรายการอาหาร</Button>
              </Col>
            </Row>
          </CardBody>
        </div>
      );
    });
    return (
      <div>
        <div class="container-fluid">
          <div className="text_orderkitchen">รายการอาหารที่เข้ามา</div>
          {/* <div class="row">
            <div class="col-12 col-md-8"> */}
          <Card className="card_orderkitchen">
            <CardHeader>
              <Row>
                <Col xs="1">ลำดับ</Col>
                <Col>รายการ</Col>
                <Col sm="4" className="test_statusorder">
                  สถานะ
                </Col>
              </Row>
            </CardHeader>
            {table}
            <CardFooter>
              <div class="row">
                <Col>จำนวนรายการอาหาร</Col>
                <Col xs="3">------</Col>
                <div class="col col-lg-2">รายการ</div>
              </div>
            </CardFooter>
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
