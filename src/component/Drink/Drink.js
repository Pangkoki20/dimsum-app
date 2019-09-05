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
import "./Drink.css";

class Drink extends Component {
  state = {
    drink: [
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img: "https://3.bp.blogspot.com/-rnoH11ekOZ8/Wo3ynr0jRqI/AAAAAAAAAhQ/8o69jP3ZY9cKcuzUgCZzeIIQXrFbvCfbACLcBGAs/s1600/1519251724170.png"
      },
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img: "https://3.bp.blogspot.com/-rnoH11ekOZ8/Wo3ynr0jRqI/AAAAAAAAAhQ/8o69jP3ZY9cKcuzUgCZzeIIQXrFbvCfbACLcBGAs/s1600/1519251724170.png"
      },
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img: "https://3.bp.blogspot.com/-rnoH11ekOZ8/Wo3ynr0jRqI/AAAAAAAAAhQ/8o69jP3ZY9cKcuzUgCZzeIIQXrFbvCfbACLcBGAs/s1600/1519251724170.png"
      }
    ]
  };
  renderDrink = () => {
    return this.state.drink.map((drink, index) => (
      <Col xs="6" className="cardd Container">
        <Card body className="pic-card">
          <Row>
            <Col className="">
              <img top width="100%" src={drink.img} className="imgSelect" />
            </Col>
            <Col>
              <CardTitle>
                <h3 className="font-name">
                  <b>{drink.name}</b>
                </h3>
              </CardTitle>
              <CardText>{drink.description}</CardText>
              <CardText>{drink.price}</CardText>
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
        <Banner />
        <Container>
          <Row>{this.renderDrink()}</Row>
        </Container>
      </div>
    );
  }
}
export default Drink;
