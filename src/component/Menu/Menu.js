import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  Button,
  Row,
  Col,
  Container,
  nav
} from "reactstrap";
import "./Menu.css";
class Menu extends Component {
  state = {
    menu: [
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img:
          "https://food.mthai.com/app/uploads/2017/06/Dim-Sum-in-Bamboo-Trays.jpg"
      },
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img:
          "https://food.mthai.com/app/uploads/2017/06/Dim-Sum-in-Bamboo-Trays.jpg"
      },
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img:
          "https://food.mthai.com/app/uploads/2017/06/Dim-Sum-in-Bamboo-Trays.jpg"
      },
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img:
          "https://food.mthai.com/app/uploads/2017/06/Dim-Sum-in-Bamboo-Trays.jpg"
      },
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img:
          "https://food.mthai.com/app/uploads/2017/06/Dim-Sum-in-Bamboo-Trays.jpg"
      },
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img:
          "https://food.mthai.com/app/uploads/2017/06/Dim-Sum-in-Bamboo-Trays.jpg"
      }
    ]
  };
  renderMenu = () => {
    return this.state.menu.map((menu, index) => (
      <Col xs="6" className="cardd Container">
        <Card body className="pic-card">
          <Row>
            <Col className="">
              <img top width="100%" src={menu.img} className="imgSelect" />
            </Col>
            <Col>
              <CardTitle>
                <h3 className="font-name">
                  <b>{menu.name}</b>
                </h3>
              </CardTitle>
              <CardText>{menu.description}</CardText>
              <CardText>{menu.price}</CardText>
              <Button outline color="danger">
                หยิบใส่ตะกร้า
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
    ));
  };
  render() {
    return (
      <div>
        <Container>
          <Row>{this.renderMenu()}</Row>
          <h1 className="new-menu"> เมนูแนะนำ</h1>
        </Container>
      </div>
    );
  }
}
export default Menu;
