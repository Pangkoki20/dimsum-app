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
import "./Dimsum.css";
import Banner from "../Banner/Banner";
class Dimsum extends Component {
  state = {
    dimmsum: [
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      },
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      },
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      },
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      },
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      },
      {
        name: "ขนมจีบหมู",
        description: "asdqwqwdqwdqwd",
        price: 62,
        img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      }
    ]
  };
  renderDimmsum = () => {
    return this.state.dimmsum.map((dimmsum, index) => (
      <Col xs="6" className="cardd Container">
        <Card body className="pic-card">
          <Row>
            <Col className="">
              <img top width="100%" src={dimmsum.img} className="imgSelect" />
            </Col>
            <Col>
              <CardTitle>
                <h3 className="font-name">
                  <b>{dimmsum.name}</b>
                </h3>
              </CardTitle>
              <CardText>{dimmsum.description}</CardText>
              <CardText>{dimmsum.price}</CardText>
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
          <Row>{this.renderDimmsum()}</Row>
        </Container>
      </div>
    );
  }
}
export default Dimsum;
