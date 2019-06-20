import React, { Component } from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";
import "./Menu.css";

class Menu extends Component {
  render() {
    return (
      <Container>
        <Row>
            <Col className="">
            <div class="card" style="width: 18rem;">
  <img class="" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
            </Col>
        </Row>
      </Container>
    );
  }
}
export default Menu;
