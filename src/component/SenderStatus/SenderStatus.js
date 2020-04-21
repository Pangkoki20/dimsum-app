import React, { Component } from "react";
import { Card, CardHeader, CardBody, Row, Col, Button } from "reactstrap";
import "./SenderStatus.css";
import axios from "axios";
class SenderStatus extends Component {
  state = {
    order: [],
  };
  onUserChanged = (user) => {
    this.setState({ user });
  };
  componentDidMount = async (nextProps) => {
    let order = await axios.get(`http://localhost:3001/api/order`);
    this.setState({ order: order.data });
  };
  render() {
    return (
      <div className="container-fluid ">
        <div className="text_senderstatus">ออเดอร์อาหารพร้อมส่ง</div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Card className="card_orderkitchen">
              <CardHeader>
                <Row>
                  <Col>order_id</Col>
                  <Col>สถานะ</Col>
                </Row>
              </CardHeader>
              {this.state.order.map((order) => {
                if (order.status === "4")
                  return (
                    <CardBody>
                      <Row>
                        <Col>{order.id}</Col>
                        <Col>
                          <Button color="danger" outline href="/DeliveryFood">
                            จัดส่งอาหาร
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  );
                else return null;
              })}
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
export default SenderStatus;
