import React, { Component } from "react";
import { Card, Row, Col, Container } from "reactstrap";
import "./Delivery.css";
import MenuSelect from "../MenuSelect/MenuSelect";
import img_menu from "../../imgdelivery/menu.png";
import img_meal from "../../imgdelivery/meal.png";
import img_product from "../../imgdelivery/product2.png";
import img_delivery from "../../imgdelivery/delivery.png";
import img_breakfast from "../../imgdelivery/breakfast.png";
import img_foodorder from "../../imgdelivery/dish.png";
import axios from "axios";
<<<<<<< HEAD
import auth from "../service/index";
=======
import auth from "../service/index"
>>>>>>> 26f89ef97d7a1ffd36a3c8b2ff29283940ae2b7c
class Delivery extends Component {
  state = {
    user: null,
    allData: []
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

<<<<<<< HEAD
    let user = auth.getToken();
    let userDecoded = auth.decodeToken(user);
    let userId = userDecoded.id;
    let userFirstName = userDecoded.firstname;
    let userLastName = userDecoded.lastname;
    let userRole = userDecoded.role;
    this.getAllOrder(userId);
  };

  async getAllOrder(userId) {
    await axios
      .get(`http://localhost:3001/api/order/orderbyuser/${userId}`)
      .then(res => {
        const { data } = res.data;
        console.log("res : ", res.data);
        this.setState({ allData: res.data });
      });
=======
    let user = auth.getToken()
    let userDecoded = auth.decodeToken(user)
    let userId = userDecoded.id
    let userFirstName = userDecoded.firstname
    let userLastName = userDecoded.lastname
    let userRole = userDecoded.role
    this.getAllOrder(userId)
  };

  async getAllOrder(userId) {
    await axios.get(`http://localhost:3001/api/order/orderbyuser/${userId}`).then(res => {
      const { data } = res.data;
      console.log("res : ", res.data);
      this.setState({ allData: res.data })
    });
>>>>>>> 26f89ef97d7a1ffd36a3c8b2ff29283940ae2b7c
  }

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
            <Container className="p-4">
<<<<<<< HEAD
              <Row>
                All Orders
                {this.state.allData.map(e => {
                  return (
                    <Col md={12}>
                      <div className="p-3">
                        order no.{e.id}, status : {e.status}{" "}
                        {e.allMenu.map((e, i = 0) => {
                          return (
                            <div>
                              {i + 1}.{e.namefood}
                            </div>
                          );
                        })}
                      </div>
                    </Col>
                  );
                })}
=======
              <Row>All Orders
                
                  {this.state.allData.map(e => {
                   
                    return ( <Col md={12}><div className="p-3">order no.{e.id},  status : {e.status} {e.allMenu.map((e,i=0)=>{
                      return (<div>{i+1}.{e.namefood}</div>)
                    })}</div></Col>)
                  }
                  
                  )}

>>>>>>> 26f89ef97d7a1ffd36a3c8b2ff29283940ae2b7c
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
export default Delivery;
