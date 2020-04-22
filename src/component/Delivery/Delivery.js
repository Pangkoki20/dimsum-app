import React, { Component } from "react";
import { Card, Row, Col, Container } from "reactstrap";
import "./Delivery.css";
import MenuSelect from "../MenuSelect/MenuSelect";
import img_menu from "../../imgdelivery/menu.png";
import img_meal from "../../imgdelivery/meal.png";
import img_product from "../../imgdelivery/product2.png";
import img_breakfast from "../../imgdelivery/breakfast.png";
import img_foodorder from "../../imgdelivery/dish.png";
import axios from "axios";
import auth from "../service/index";
class Delivery extends Component {
  state = {
    user: null,
    allData: [],
  };

  onUserChanged = (user) => {
    this.setState({ user });
  };
  componentDidMount = async (nextProps) => {
    let token = localStorage.getItem("token");
    const orders = await localStorage.getItem("order");
    console.log({ orders });
    //get params
    const orderId = this.props.match.params.id;
    console.log({ orderId });
    if (token) {
      if (token !== null) {
        this.setState({ check: "login" });
      }
      let res = await axios.post(`http://localhost:3001/api/users/me`, {
        token,
      });
      // if (!res) {
      //   window.location.href = "/login";
      //   return;
      // }
      this.setState({ user: res.data });
    } else {
      window.location.href = "/login";
    }

    let user = auth.getToken();
    let userDecoded = auth.decodeToken(user);
    let userId = userDecoded.id;
    // let userFirstName = userDecoded.firstname;
    // let userLastName = userDecoded.lastname;
    // let userRole = userDecoded.role;

    this.checkComponent = setInterval(() => {
      this.getAllOrder(userId);
    }, 1000);
  };

  async getAllOrder(userId) {
    await axios
      .get(`http://localhost:3001/api/order/orderbyuser/${userId}`)
      .then((res) => {
        const { data } = res.data;
        console.log("res : ", res.data);
        this.setState({ allData: res.data });
      });
  }

  orderSuccess = () => {
    let orderStatus = 0;
    this.state.allData.map((data, index) => {
      const { status } = data;
      console.log("this status " + status);
      orderStatus = status;
    });
    console.log("orderStatus: " + orderStatus);
    if (orderStatus >= 1) {
      return (
        <Card body className="border border-primary rounded green">
          <div>
            <img
              className="img_foodorder img-fluid"
              src={img_foodorder}
              alt=""
            />
          </div>
          <div className="font_status">สั่งอาหารแล้ว</div>
        </Card>
      );
    } else {
      return (
        <Card body className="border border-primary rounded">
          <div>
            <img
              className="img_foodorder img-fluid"
              src={img_foodorder}
              alt=""
            />
          </div>
          <div className="font_status">สั่งอาหารแล้ว</div>
        </Card>
      );
    }
  };

  getOrderSuccess = () => {
    let orderStatus = 0;
    this.state.allData.map((data, index) => {
      const { status } = data;
      console.log("this status " + status);
      orderStatus = status;
    });
    console.log("orderStatus: " + orderStatus);
    if (orderStatus >= 2) {
      return (
        <Card body className="border border-primary rounded green">
          <div>
            <img className="img_menu img-fluid" src={img_menu} alt="" />
          </div>
          <div className="font_status">ได้รับรายการอาหารแล้ว</div>
        </Card>
      );
    } else {
      return (
        <Card body className="border border-primary rounded">
          <div>
            <img className="img_menu img-fluid" src={img_menu} alt="" />
          </div>
          <div className="font_status">ได้รับรายการอาหารแล้ว</div>
        </Card>
      );
    }
  };

  preparingFood = () => {
    let orderStatus = 0;
    this.state.allData.map((data, index) => {
      const { status } = data;
      console.log("this status " + status);
      orderStatus = status;
    });
    console.log("orderStatus: " + orderStatus);
    if (orderStatus >= 3) {
      return (
        <Card body className="border border-primary rounded">
          <div>
            <img className="img_meal img-fluid" src={img_meal} alt="" />
          </div>
          <div className="font_status">กำลังจัดเตรียมอาหาร</div>
        </Card>
      );
    } else {
      return (
        <Card body className="border border-primary rounded">
          <div>
            <img className="img_meal img-fluid" src={img_meal} alt="" />
          </div>
          <div className="font_status">กำลังจัดเตรียมอาหาร</div>
        </Card>
      );
    }
  };

  readyToSend = () => {
    let orderStatus = 0;
    this.state.allData.map((data, index) => {
      const { status } = data;
      console.log("this status " + status);
      orderStatus = status;
    });
    console.log("orderStatus: " + orderStatus);
    if (orderStatus >= 4) {
      return (
        <Card body className="border border-primary rounded">
          <div>
            <img className="img_product img-fluid" src={img_product} alt="" />
          </div>
          <div className="font_status">อาหารของคุณพร้อมส่ง</div>
        </Card>
      );
    } else {
      return (
        <Card body className="border border-primary rounded">
          <div>
            <img className="img_product img-fluid" src={img_product} alt="" />
          </div>
          <div className="font_status">อาหารของคุณพร้อมส่ง</div>
        </Card>
      );
    }
  };

  foodReceived = () => {
    let orderStatus = 0;
    this.state.allData.map((data, index) => {
      const { status } = data;
      console.log("this status " + status);
      orderStatus = status;
    });
    console.log("orderStatus: " + orderStatus);
    if (orderStatus >= 5) {
      return (
        <Card body className="border border-primary rounded">
          <div>
            <img
              className="img_breakfast img-fluid"
              src={img_breakfast}
              alt=""
            />
          </div>
          <div className="font_status">คุณได้รับอาหารแล้ว</div>
        </Card>
      );
    } else {
      return (
        <Card body className="border border-primary rounded">
          <div>
            <img
              className="img_breakfast img-fluid"
              src={img_breakfast}
              alt=""
            />
          </div>
          <div className="font_status">คุณได้รับอาหารแล้ว</div>
        </Card>
      );
    }
  };
  render() {
    let orderSuccess = this.orderSuccess();
    let getOrderSuccess = this.getOrderSuccess();
    let preparingFood = this.preparingFood();
    let readyToSend = this.readyToSend();
    let foodReceived = this.foodReceived();
    console.log("allData: " + this.state.allData);
    return (
      <div>
        <MenuSelect />
        <div className="container-fluid">
          <div className="text_status">ติดตามสถานะการจัดส่ง</div>
          <div className="from_status">
            <Row>
              <Col className="frame_status">{orderSuccess}</Col>
              <Col className="frame_status">{getOrderSuccess}</Col>
              <Col className="frame_status">{preparingFood}</Col>
              <Col className="frame_status">{readyToSend}</Col>
              <Col className="frame_status">{foodReceived}</Col>
            </Row>
          </div>
          <Container className="p-4">
            <Row>
              All Orders
              {this.state.allData.map((e) => {
                return (
                  <Col md={12}>
                    <div className="p-3">
                      order no.{e.id}, status : {e.status}{" "}
                      {/* {e.allMenu.map((e, i = 0) => {
                        return (
                          <div>
                            {i + 1}.{e.namefood}
                          </div>
                        );
                      })} */}
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default Delivery;
