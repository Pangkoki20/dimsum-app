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
import "./Fried.css";

class Fried extends Component {
  state = {
    fried: [
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img: "https://foodmakesgood.com/wp-content/uploads/151-8.jpg"
      },
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img: "https://foodmakesgood.com/wp-content/uploads/151-8.jpg"
      },
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img: "https://foodmakesgood.com/wp-content/uploads/151-8.jpg"
      },
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img: "https://foodmakesgood.com/wp-content/uploads/151-8.jpg"
      },
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img: "https://foodmakesgood.com/wp-content/uploads/151-8.jpg"
      },
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img: "https://foodmakesgood.com/wp-content/uploads/151-8.jpg"
      }
    ]
  };
  renderFried = () => {
    return this.state.fried.map((fried, index) => (
      <Col xs="6" className="cardd Container">
        <Card body className="pic-card">
          <Row>
            <Col className="">
              <img top width="100%" src={fried.img} className="imgSelect" />
            </Col>
            <Col>
              <CardTitle>
                <h3 className="font-name">
                  <b>{fried.name}</b>
                </h3>
              </CardTitle>
              <CardText>{fried.description}</CardText>
              <CardText>{fried.price}</CardText>
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
          <Row>{this.renderFried()}</Row>
        </Container>
      </div>
    );
  }
}
export default Fried;
