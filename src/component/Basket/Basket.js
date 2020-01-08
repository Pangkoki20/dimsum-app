import React, { Component } from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardText,
  Row,
  Col
} from "reactstrap";
import "./Basket.css";
import img_gps from "../../imgbasket/confirmation.png";
import MenuSelect from "../MenuSelect/MenuSelect";
class Basket extends Component {
  state = {
    order: [],
    priceAll: 0,
    total: 0,
    check: 1
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
  async getData() {
    let order = JSON.parse(localStorage.getItem("order"));
    this.setState({ order: order });
    await this.setState({ priceAll: 0 });
    console.log("After Remove order : ", order);
    order.map((e, index) => {
      this.state.priceAll = this.state.priceAll + e.menu_value * e.menu_price;
      console.log("after price all : ", this.state.priceAll);
    });
    this.setState({ priceAll: this.state.priceAll });
  }

  render() {
    return (
      <div>
        <MenuSelect />
        <div className="container-fluid">
          <div className="text_basket">อาหารในตะกร้า</div>
          <div className="row">
            <div className="col-12 col-md-8">
              <Card className="card_food">
                <CardHeader>
                  <Row>
                    <Col>ลำดับที่</Col>
                    <Col>ชื่ออาหาร</Col>
                    <Col>ราคา</Col>
                    <Col>จำนวน</Col>
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
                          <Col></Col>
                          <Col className="img_trash">
                            <div onClick={() => this.toRemove(index)}>
                              <i className="far fa-trash-alt"></i>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </div>
                  );
                })}
                <CardFooter>
                  <div className="text_addfood">เลือกอาหารเพิ่ม</div>
                </CardFooter>
              </Card>
              <br></br>
              <br></br>
              <br></br>
            </div>
            <div class="col-6 col-md-4 ">
              <div className="from_money">
                <Card>
                  <CardHeader className="text_money">รวมทั้งหมด</CardHeader>
                  <div className="table_num">
                    <div className="d-flex">
                      <div className="col-6">
                        <CardText className="tt_food ">จำนวนอาหารที่สั่งทั้งหมด</CardText>
                      </div>
                      <div className="col">
                        <CardText className="tt_food text_num">
                          {this.state.order.length}
                        </CardText>
                      </div>
                      <div className="col">
                        <CardText className="tt_food text_unit">ชิ้น</CardText>
                      </div>
                    </div>
                  </div>
                  <div className="table_num">
                    <div className="d-flex">
                      <div className="col-6">
                        <CardText className="tt_food">
                          ราคาอาหารทั้งหมด
                        </CardText>
                      </div>
                      <div className="col">
                        <CardText className="tt_food text_num">
                          {this.state.priceAll}
                        </CardText>
                      </div>
                      <div className="col">
                        <CardText className="tt_food text_unit">บาท</CardText>
                      </div>
                    </div>
                  </div>
                  <div className="table_num">
                    <div className="d-flex">
                      <div className="col-6">
                        <CardText className="delivery_charge">
                          ค่าจัดส่ง
                        </CardText>
                      </div>
                      <div className="col">
                        <CardText className="delivery_charge text_num">
                          30
                        </CardText>
                      </div>
                      <div className="col">
                        <CardText className="tt_food text_unit">บาท</CardText>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <CardFooter className="tt_money">
                    <div className="row">
                      <div className="col-6 "> รวม</div>
                      <div className="col tt_money2">
                        {this.state.priceAll + 30}
                      </div>
                      <div className="col"> บาท</div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
              <div className="add_food">
                <Button color="info" size="lg" block href="/Menu">
                  เพิ่มรายการอาหาร
                </Button>
              </div>
              <div className="address_customer">
                <Button outline color="info" size="lg" block href="/Order">
                  <img className="img_gps" src={img_gps} />
                  ยืนยันการสั่งซื้อ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Basket;
