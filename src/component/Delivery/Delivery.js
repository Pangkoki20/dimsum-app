import React, { Component } from "react";
import { Card, Row, Col, Container } from "reactstrap";
import "./Delivery.css";
import MenuSelect from "../MenuSelect/MenuSelect";
import img_menu from "../../imgdelivery/menu.png";
// import img_meal from "../../imgdelivery/meal.png";
import img_product from "../../imgdelivery/product2.png";
import img_breakfast from "../../imgdelivery/breakfast.png";
import img_foodorder from "../../imgdelivery/dish.png";
import axios from "axios";
import auth from "../service/index";
class Delivery extends Component {
  state = {
    user: null,
    allData: [],
    order: [],
  };

  onUserChanged = (user) => {
    this.setState({ user });
  };
  componentDidMount = async (nextProps) => {
    let token = localStorage.getItem("token");
    const orders = await localStorage.getItem("order");
    console.log({ orders });
    const orderId = this.props.match.params.id;
    console.log({ orderId });
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

    let user = auth.getToken();
    let userDecoded = auth.decodeToken(user);
    let userId = userDecoded.id;

    this.checkComponent = setInterval(() => {
      this.getAllOrder(userId);
    }, 1000);
  };

  async getAllOrder(userId) {
    await axios
      .get(`http://localhost:3001/api/order/orderbyuser/${userId}`)
      .then((res) => {
        console.log("res : ", res.data);
        this.setState({ allData: res.data });
      });
  }

  render() {
    const numberOfMenus = this.state.order.reduce(
      (acc, next) => acc + next.menu_value,
      0
    );
    console.log("allData: " + this.state.allData);
    const orderSuccess = this.state.allData.map((data, index) => {
      const { status } = data;
      console.log("this status " + status + "id: " + index);
      console.log("tese", parseInt(data.status));
      if (parseInt(data.status) === 1) {
        return (
          <div key={index}>
            <Row>
              <Col md={12}>
                <div className="p-3">
                  {/* order no.{data.id}, status : {data.status} */}
                </div>
              </Col>
            </Row>
            <Row xs="4" className="framedelivery">
              <Col>
                <Card
                  body
                  className="fromdeliverysize border border-primary rounded green"
                >
                  <div className="">
                    <img
                      className="img_foodorder img-fluid"
                      src={img_foodorder}
                      alt=""
                    />
                  </div>
                  <div className="font_status">สั่งอาหารแล้ว</div>
                </Card>
              </Col>
              <Col>
                <Card
                  body
                  className="fromdeliverysize border border-primary rounded"
                >
                  <div>
                    <img className="img_menu img-fluid" src={img_menu} alt="" />
                  </div>
                  <div className="font_status">ได้รับรายการอาหารแล้ว</div>
                </Card>
              </Col>

              <Col>
                <Card
                  body
                  className="fromdeliverysize border border-primary rounded"
                >
                  <div>
                    <img
                      className="img_product img-fluid"
                      src={img_product}
                      alt=""
                    />
                  </div>
                  <div className="font_status">อาหารของคุณพร้อมส่ง</div>
                </Card>
              </Col>
              <Col>
                <Card
                  body
                  className="fromdeliverysize border border-primary rounded"
                >
                  <div>
                    <img
                      className="img_breakfast img-fluid"
                      src={img_breakfast}
                      alt=""
                    />
                  </div>
                  <div className="font_status">คุณได้รับอาหารแล้ว</div>
                </Card>
              </Col>
            </Row>
          </div>
        );
      } else if (parseInt(data.status) === 2) {
        return (
          <div key={index}>
            <Row>
              <Col md={12}>
                <div className="p-3">
                  {/* order no.{data.id}, status : {data.status} */}
                </div>
              </Col>
            </Row>
            <Row xs="4" className="framedelivery">
              <Col>
                <Card
                  body
                  className="fromdeliverysize border border-primary rounded green"
                >
                  <div>
                    <img
                      className="img_foodorder img-fluid"
                      src={img_foodorder}
                      alt=""
                    />
                  </div>
                  <div className="font_status">สั่งอาหารแล้ว</div>
                </Card>
              </Col>
              <Col>
                <Card
                  body
                  className="fromdeliverysize border border-primary rounded green"
                >
                  <div>
                    <img className="img_menu img-fluid" src={img_menu} alt="" />
                  </div>
                  <div className="font_status">ได้รับรายการอาหารแล้ว</div>
                </Card>
              </Col>
              <Col>
                <Card
                  body
                  className="fromdeliverysize border border-primary rounded"
                >
                  <div>
                    <img
                      className="img_product img-fluid"
                      src={img_product}
                      alt=""
                    />
                  </div>
                  <div className="font_status">อาหารของคุณพร้อมส่ง</div>
                </Card>
              </Col>
              <Col>
                <Card
                  body
                  className="fromdeliverysize border border-primary rounded"
                >
                  <div>
                    <img
                      className="img_breakfast img-fluid"
                      src={img_breakfast}
                      alt=""
                    />
                  </div>
                  <div className="font_status">คุณได้รับอาหารแล้ว</div>
                </Card>
              </Col>
            </Row>
          </div>
        );
      } else if (parseInt(data.status) === 3) {
        return (
          <div key={index}>
            <Row>
              <Col md={12}>
                <div className="p-3">
                  {/* order no.{data.id}, status : {data.status} */}
                </div>
              </Col>
            </Row>
            <Row xs="4" className="framedelivery">
              <Col>
                <Card
                  body
                  className="fromdeliverysize border border-primary rounded green"
                >
                  <div>
                    <img
                      className="img_foodorder img-fluid"
                      src={img_foodorder}
                      alt=""
                    />
                  </div>
                  <div className="font_status">สั่งอาหารแล้ว</div>
                </Card>
              </Col>
              <Col>
                <Card
                  body
                  className="fromdeliverysize border border-primary rounded green"
                >
                  <div>
                    <img className="img_menu img-fluid" src={img_menu} alt="" />
                  </div>
                  <div className="font_status">ได้รับรายการอาหารแล้ว</div>
                </Card>
              </Col>

              <Col>
                <Card
                  body
                  className="fromdeliverysize border border-primary rounded green"
                >
                  <div>
                    <img
                      className="img_product img-fluid"
                      src={img_product}
                      alt=""
                    />
                  </div>
                  <div className="font_status">อาหารของคุณพร้อมส่ง</div>
                </Card>
              </Col>
              <Col>
                <Card
                  body
                  className="fromdeliverysize border border-primary rounded"
                >
                  <div>
                    <img
                      className="img_breakfast img-fluid"
                      src={img_breakfast}
                      alt=""
                    />
                  </div>
                  <div className="font_status">คุณได้รับอาหารแล้ว</div>
                </Card>
              </Col>
            </Row>
          </div>
        );
      } else if (parseInt(data.status) === 4) {
        return (
          <div key={index}>
            <Row>
              <Col md={12}>
                <div className="p-3">
                  {/* order no.{data.id}, status : {data.status} */}
                </div>
              </Col>
            </Row>
            <Row xs="4" className="framedelivery">
              <Col>
                <Card
                  body
                  className="fromdeliverysize border border-primary rounded green"
                >
                  <div>
                    <img
                      className="img_foodorder img-fluid"
                      src={img_foodorder}
                      alt=""
                    />
                  </div>
                  <div className="font_status">สั่งอาหารแล้ว</div>
                </Card>
              </Col>
              <Col>
                <Card
                  body
                  className="fromdeliverysize border border-primary rounded green"
                >
                  <div>
                    <img className="img_menu img-fluid" src={img_menu} alt="" />
                  </div>
                  <div className="font_status">ได้รับรายการอาหารแล้ว</div>
                </Card>
              </Col>
              <Col>
                <Card
                  body
                  className="fromdeliverysize border border-primary rounded green"
                >
                  <div>
                    <img
                      className="img_product img-fluid"
                      src={img_product}
                      alt=""
                    />
                  </div>
                  <div className="font_status">อาหารของคุณพร้อมส่ง</div>
                </Card>
              </Col>
              <Col>
                <Card
                  body
                  className="fromdeliverysize border border-primary rounded green"
                >
                  <div>
                    <img
                      className="img_breakfast img-fluid"
                      src={img_breakfast}
                      alt=""
                    />
                  </div>
                  <div className="font_status">คุณได้รับอาหารแล้ว</div>
                </Card>
              </Col>
            </Row>
          </div>
        );
      }
    });
    return (
      <div>
        <MenuSelect numberOnBucket={numberOfMenus} />
        <div className="container-fluid">
          <div className="text_status">ติดตามสถานะการจัดส่ง</div>
          <Container>
            <Row xs="4" className="fromdelivery">
              <div className="font_status">{orderSuccess}</div>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default Delivery;
