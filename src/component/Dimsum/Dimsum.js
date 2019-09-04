import React, { Component } from "react";
import {
  Container,
  Card,
  CardTitle,
  CardText,
  button,
  Row,
  Col
} from "reactstrap";
import "./Dimsum.css";
import Banner from "../Banner/Banner";
class Dimsum extends Component {
  state = {
    dimmsum: [
      {
        name: "จ๊อปู",
        description: "asdasdasdsad",
        price: 6
      },
      {
        name: "ดกสำย",
        description: "asdqwqwdqwdqwd",
        price: 62
      },
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62
      },
      {
        name: "ซาลาเปาปลา",
        description: "asdqwqwdqwdqwd",
        price: 62
      },
      {
        name: "ฮะเก๋า",
        description: "asdqwqwdqwdqwd",
        price: 62
      },
      {
        name: "",
        description: "asdqwqwdqwdqwd",
        price: 62
      }
    ]
  };
  renderDimmsum = () => {
    return this.state.dimmsum.map((dimmsum, index) => (
      <Col xs="6" className="cardd">
        <Card body className="bg">
          <CardTitle>{dimmsum.name}</CardTitle>
          <CardText>{dimmsum.description}</CardText>
          <CardText>{dimmsum.price}</CardText>
          <button class="btn btn-danger ">หยิบใส่ตะกร้า</button>
        </Card>
      </Col>
    ));
  };
  render() {
    return (
      <div className="">
        <Banner />
        <Container>
          <Row>{this.renderDimmsum()}</Row>
        </Container>
      </div>
    );
  }
}
export default Dimsum;
