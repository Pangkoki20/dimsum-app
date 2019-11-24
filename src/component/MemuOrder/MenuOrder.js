import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardFooter,
  Row,
  Col
} from "reactstrap";
import "./MenuOrder.css";

class MenuOrder extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div className="text_orderkitchen">รายการอาหารที่เข้ามา</div>
          <div class="row">
            <div class="col-12 col-md-8">
              <Card className="card_orderkitchen">
                <CardHeader>
                  <Row>
                    <Col>Order No.</Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col>1
                    </Col>
                    <Col xs="6" sm="4">
                      .col
                    </Col>
                  </Row>
                </CardBody>
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
            <div class="col-6 col-md-4 ">
              <div class="from_orderkitchen">
                <Card>
                  <CardBody>
                    <div className="d-flex">
                      <div className="col-sm-8">
                        <CardText className="tt_food"></CardText>
                      </div>
                      <div className="col-sm-4">
                        <CardText className="tt_food"> </CardText>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="col-sm-8">
                        <CardText className="delivery_charge"></CardText>
                      </div>
                      <div className="col-sm-4">
                        <CardText className="delivery_charge"></CardText>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MenuOrder;
