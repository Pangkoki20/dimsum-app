import React, { Component } from "react";
import { Card, Row, Col } from "reactstrap";
import "./Delivery.css";
import MenuSelect from "../MenuSelect/MenuSelect";
import img_menu from "../../imgdelivery/menu.png";
import img_meal from "../../imgdelivery/meal.png";
import img_product from "../../imgdelivery/product2.png";
import img_delivery from "../../imgdelivery/delivery.png";
import img_breakfast from "../../imgdelivery/breakfast.png";
import img_foodorder from "../../imgdelivery/dish.png";
import axios from "axios";
class Delivery extends Component {
  state = {
    user: null
  };

  onUserChanged = user => {
    this.setState({ user });
  };
  componentDidMount = async nextProps => {
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
        token
      });
      // if (!res) {
      //   window.location.href = "/login";
      //   return;
      // }
      this.setState({ user: res.data });
    } else {
      window.location.href = "/login";
    }
  };
  render() {
    return (
      <div>
        <MenuSelect />
        <div className="container-fluid">
          <div className="text_status">ติดตามสถานะการจัดส่ง</div>
          <div className="from_status">
            <Row>
              <Col className="frame_status">
                <Card body className="border border-warning rounded">
                  <div>
                    <img
                      className="img_foodorder img-fluid"
                      src={img_foodorder}
                    />
                  </div>
                  <div className="font_status">สั่งอาหารแล้ว</div>
                </Card>
              </Col>
              <Col className="frame_status">
                <Card body className="border border-warning rounded">
                  <div>
                    <img className="img_menu img-fluid" src={img_menu} />
                  </div>
                  <div className="font_status">ได้รับรายการอาหารแล้ว</div>
                </Card>
              </Col>
              <Col className="frame_status">
                <Card body className="border border-warning rounded">
                  <div>
                    <img className="img_meal img-fluid" src={img_meal} />
                  </div>
                  <div className="font_status">กำลังจัดเตรียมอาหาร</div>
                </Card>
              </Col>
              <Col className="frame_status">
                <Card body className="border border-warning rounded">
                  <div>
                    <img className="img_product img-fluid" src={img_product} />
                  </div>
                  <div className="font_status">อาหารของคุณพร้อมส่ง</div>
                </Card>
              </Col>
              <Col className="frame_status">
                <Card body className="border border-warning rounded">
                  <div>
                    <img
                      className="img_delivery img-fluid"
                      src={img_delivery}
                    />
                  </div>
                  <div className="font_status">อาหารกำลังจัดส่ง</div>
                </Card>
              </Col>
              <Col className="frame_status">
                <Card body className="border border-warning rounded">
                  <div>
                    <img
                      className="img_breakfast img-fluid"
                      src={img_breakfast}
                    />
                  </div>
                  <div className="font_status">คุณได้รับอาหารแล้ว</div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
export default Delivery;
