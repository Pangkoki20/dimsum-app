import React, { Component } from "react";
import {
Container,
Card,
  CardTitle,
  CardText,
  Button,
  Row,
  Col
} from "reactstrap";
import Banner from "../Banner/Banner";
import "./Breakfast";
class Breakfast extends Component {
  state = {
    breakfast: [
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img: "https://cdn2.vectorstock.com/i/1000x1000/17/41/dim-sum-chinese-food-with-chopstick-vector-20711741.jpg"
      },
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img: "https://cdn2.vectorstock.com/i/1000x1000/17/41/dim-sum-chinese-food-with-chopstick-vector-20711741.jpg"
      },
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img: "https://cdn2.vectorstock.com/i/1000x1000/17/41/dim-sum-chinese-food-with-chopstick-vector-20711741.jpg"
      },
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img: "https://cdn2.vectorstock.com/i/1000x1000/17/41/dim-sum-chinese-food-with-chopstick-vector-20711741.jpg"
      },
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img: "https://cdn2.vectorstock.com/i/1000x1000/17/41/dim-sum-chinese-food-with-chopstick-vector-20711741.jpg"
      },
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img: "https://cdn2.vectorstock.com/i/1000x1000/17/41/dim-sum-chinese-food-with-chopstick-vector-20711741.jpg"
      }
    ]
  };
  renderBreakfast = () => {
    return this.state.breakfast.map((breakfast, index) => (
      <Col xs="6" className="cardd Container">
        <Card body className="pic-card">
          <Row>
            <Col className="">
              <img top width="100%" src={breakfast.img} className="imgSelect" />
            </Col>
            <Col>
              <CardTitle>
                <h3 className="font-name">
                  <b>{breakfast.name}</b>
                </h3>
              </CardTitle>
              <CardText>{breakfast.description}</CardText>
              <CardText>{breakfast.price}</CardText>
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
      <div className="">
        <Banner />
        <Container>
          <Row>{this.renderBreakfast()}</Row>
        </Container>
      </div>
    );
  }
}
export default Breakfast;
