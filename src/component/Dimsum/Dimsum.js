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
import Banner from "../Banner/Banner";
import "./Dimsum.css";

class Dimsum extends Component {
  render() {
    return (
      <Container>
        <div>
          <Banner />
          
          </div>
      </Container>
    );
  }
}
export default Dimsum;
