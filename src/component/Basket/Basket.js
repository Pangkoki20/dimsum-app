import React, { Component } from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardText,
  Row,
  Col,
} from "reactstrap";
import "./Basket.css";
import axios from "axios";
import img_gps from "../../imgbasket/confirmation.png";
import MenuSelect from "../MenuSelect/MenuSelect";
class Basket extends Component {
  state = {
    user: null,
    order: [],
    priceAll: 0,
    total: 0,
    check: 1,
    count: 0,
    menu_value: 0,
  };
  onUserChanged = (user) => {
    this.setState({ user });
  };
  componentDidMount = async (nextProps) => {
    let token = localStorage.getItem("token");
    if (token) {
      if (token !== null) {
        this.setState({ check: "login" });
      }
      let res = await axios.post(`http://localhost:3001/api/users/me`, {
        token,
      });

      this.setState({ user: res.data });
    } else {
      window.location.href = "/login";
    }
    let order = JSON.parse(localStorage.getItem("order"));
    console.log("all order : ", order);
    this.setState({ order: order });
    order.map((e, index) => {
      this.state.priceAll = this.state.priceAll + e.menu_value * e.menu_price;
      this.state.menu_value += e.menu_value;
      console.log("price all : ", this.state.priceAll);
    });
    console.log("menu value: " + this.state.menu_value);
    this.setState({ priceAll: this.state.priceAll });
  };

  toRemove = (index) => {
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

  addCount = (index) => {
    const { order } = this.state;
    const newOrder = order.reduce((acc, next, indexArrrr) => {
      if (index === indexArrrr) {
        return [
          ...acc,
          {
            ...next,
            menu_value: (next.menu_value += 1),
          },
        ];
      }
      console.log("this menu++");
      return [
        ...acc,
        {
          ...next,
        },
      ];
    }, []);
    console.log({ newOrder });
    localStorage.setItem("order", JSON.stringify(newOrder));
    this.getData();
    this.setState({
      order: newOrder,
    });
  };
  removeCount = (index) => {
    const { order } = this.state;
    const newOrder = order.reduce((acc, next, indexArrrr) => {
      if (index === indexArrrr) {
        return [
          ...acc,
          {
            ...next,
            menu_value: (next.menu_value -= 1),
          },
        ];
      }
      return [
        ...acc,
        {
          ...next,
        },
      ];
    }, []);
    console.log({ newOrder });
    localStorage.setItem("order", JSON.stringify(newOrder));
    this.getData();
    this.setState({
      order: newOrder,
    });
  };
  render() {
    const numberOfMenus = this.state.order.reduce(
      (acc, next) => acc + next.menu_value,
      0
    );
    console.log("number in Basket page: " + numberOfMenus);
    return (
      <div>
        <MenuSelect numberOnBucket={numberOfMenus} />
        <div className="container-fluid">
          <div className="text_basket">อาหารในตะกร้า</div>
          <div className="row">
            <div className="col-12 col-md-8">
              <Card className="card_food">
                <CardHeader>
                  <Row>
                    <Col xs="3" sm="2">
                      ลำดับที่
                    </Col>
                    <Col xs="3" sm="2">
                      ชื่ออาหาร
                    </Col>
                    <Col xs="3" sm="2">
                      ราคา
                    </Col>
                    <Col xs="3" sm="2">
                      จำนวน
                    </Col>
                    <Col xs="3" sm="2">
                      ราคารวม
                    </Col>
                    <Col xs="3" sm="2">
                      ลบออก
                    </Col>
                  </Row>
                </CardHeader>
                {this.state.order.map((e, index) => {
                  return (
                    <div key={index + 1}>
                      <CardBody>
                        <Row>
                          <Col xs="3" sm="2">
                            {index + 1}
                          </Col>
                          <Col xs="3" sm="2">
                            {e.menu_name}
                          </Col>
                          <Col xs="3" sm="2">
                            {e.menu_price}
                          </Col>
                          <Col xs="3" sm="2">
                            <div
                              className="btn-group btaddfood"
                              role="group"
                              aria-label=""
                            >
                              {e.menu_value > 1 ? (
                                <button
                                  type="button"
                                  className="btn btn-outline-info btaddfood"
                                  onClick={() => this.removeCount(index)}
                                >
                                  -
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  className="btn btn-outline-info btaddfood"
                                >
                                  -
                                </button>
                              )}
                              <button
                                type="button"
                                className="btn btn-outline-info btaddfood"
                              >
                                {e.menu_value}
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-info btaddfood"
                                onClick={() => this.addCount(index)}
                              >
                                +
                              </button>
                            </div>
                          </Col>
                          <Col xs="3" sm="2">
                            {e.menu_value * e.menu_price}
                          </Col>
                          <Col xs="3" sm="2" className="img_trash">
                            <div onClick={() => this.toRemove(index)}>
                              <i className="far fa-trash-alt"></i>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </div>
                  );
                })}
              </Card>
            </div>
            <div class="col-6 col-md-4 fcMoney container">
              <div className="from_money">
                <Card className="">
                  <CardHeader className="text_money">รวมทั้งหมด</CardHeader>
                  <div className="table_num">
                    <div className="d-flex">
                      <div className="col-6">
                        <CardText className="tt_food ">
                          จำนวนอาหารที่สั่งทั้งหมด
                        </CardText>
                      </div>
                      <div className="col">
                        <CardText className="tt_food text_num">
                          {numberOfMenus}
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
                        <CardText className="text_num">30</CardText>
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
              <div className="address_customer">
                <Button
                  className="OrderConfirmation"
                  color="info"
                  size="lg"
                  block
                  href="/Order"
                >
                  <img className="img_gps" src={img_gps} alt="" />
                  ยืนยันการสั่งซื้อ
                </Button>
              </div>
              <div className="add_food">
                <Button
                  className="OrderConfirmation"
                  outline
                  color="info"
                  size="lg"
                  block
                  href="/Menu"
                >
                  เพิ่มรายการอาหาร
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
