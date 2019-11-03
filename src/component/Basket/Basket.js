import React, { Component } from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  Input,
  CardText,
  ButtonGroup,
  Row,
  Col
} from "reactstrap";
import "./Basket.css";
import img_gps from "../../imgbasket/confirmation.png";
import img_trash from "../../imgbasket/trash.png";
import BTCount from "./BTCount";
class Basket extends Component {
  state = {
    order: [],
    priceAll: 0,
    total: 0
  };
  componentDidMount = () => {
    let order = JSON.parse(localStorage.getItem("order"));
    console.log("all order : ", order);
    this.setState({ order: order });
    order.map((e, index) => {
      this.state.priceAll = this.state.priceAll + e.menu_value * e.menu_price;
      console.log("price all : ", this.state.priceAll);
    });
    this.setState({ priceAll: this.state.priceAll });
  };

  toRemove = index => {
    console.log("index is ", index);
    const order = this.state.order;
    const afterObject = order.filter((o, i) => i !== index);
    console.log("after : ", afterObject);
    localStorage.setItem("order", JSON.stringify(afterObject));
    this.getData();
  };
  getData = () => {
    let order = JSON.parse(localStorage.getItem("order"));
    this.setState({ order: order });
  };

  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-8">
            <div className="text_basket">อาหารในตะกร้า</div>
            <Card className="card_food">
              <CardHeader>
                <Row>
                  <Col>ลำดับที่</Col>
                  <Col>ชื่ออาหาร</Col>
                  <Col>ราคา</Col>
                  {/* <Col>จำนวน</Col> */}
                  <Col>ลบออก</Col>
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
                        <Col className="img_trash">
                          <div onClick={() => this.toRemove(index)}>
                            <i class="fas fa-trash"></i>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </div>
                );
              })}

              <CardFooter>
                <div class="row">
                  <div class="col">จำนวนทั้งหมด</div>
                  <div class="col col-lg-2">{this.state.order.length}</div>
                  <div class="col col-lg-2">ชิ้น</div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div class="col-6 col-md-4 ">
            <div class="card from_money">
              <Card>
                <CardHeader className="text_money">รวมทั้งหมด</CardHeader>
                <CardBody>
                  <div className="d-flex">
                    <div className="col-sm-8">
                      <CardText className="tt_food">ราคาอาหารทั้งหมด</CardText>
                    </div>
                    <div className="col-sm-4">
                      <CardText className="tt_food">
                        {this.state.priceAll} บาท
                      </CardText>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="col-sm-8">
                      <CardText className="delivery_charge">ค่าจัดส่ง</CardText>
                    </div>
                    <div className="col-sm-4">
                      <CardText className="delivery_charge">30 บาท</CardText>
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="tt_money">
                  <div class="row">
                    <div class="col-sm-8"> รวม</div>
                    <div class="col-sm-4">{this.state.priceAll + 30} </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
            <div className="address_customer">
              <Button outline color="info" size="lg" block href="/OrderConfirm">
                <img className="img_gps" src={img_gps} />
                ยืนยันการสั่งซื้อ
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Basket;
