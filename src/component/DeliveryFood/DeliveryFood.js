import React, { Component } from "react";
import {
  Card,
  CardHeader,
  Row,
  Col,
  CardBody,
  Button,
  CardFooter,
} from "reactstrap";
import "./DeliveryFood.css";
import axios from "axios";

class DeliveryFood extends Component {
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
      <div className="container-fluid formSender">
        <div className="text_senderstatus">ข้อมูลลูกค้า</div>
        <div className="row fromDeliveryfood">
          <div className="col-md-6 offset-md-3 ">
            <Card>
              <CardHeader>
                <Row className="cardDelivery">
                  <Col xs="3">Order_id</Col>
                  <Col>ข้อมูลของลูกค้า</Col>
                </Row>
              </CardHeader>
              {this.state.order.map((order) => {
                if (order.status === "3")
                  return (
                    <CardBody>
                      <Row>
                        <Col className="cardDataUser" xs="3">
                          {order.id}
                        </Col>
                        <div className="textNameCustomer">
                          <Col className="fontNameCustomer">ชื่อลูกค้า :</Col>
                          <Col>ที่อยู่สำหรับการจัดส่ง :</Col>
                          <Col>เบอร์โทรศัพท์ :</Col>
                          <Col>วิธีการชำระเงิน :</Col>
                          <br></br> <br></br> <br></br> <br></br> <br></br>
                        </div>
                      </Row>
                    </CardBody>
                  );
                else return null;
              })}
              <CardFooter>
                <div className="row ">
                  <div className="col fontMoney">
                    จำนวนเงินที่ลูกค้าต้องชำระ{" "}
                  </div>
                  <div className="col col-lg-2 fontUnit">บาท</div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="btFoodDelivery">
          <Button className="fontBTFoodDelivery" color="danger" size="sm" block>
            ส่งอาหารเรียบร้อยแล้ว
          </Button>
        </div>
      </div>
    );
  }
}
export default DeliveryFood;
