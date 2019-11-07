import React, { Component } from "react";
import { Container, Card, CardImg, CardColumns, CardTitle } from "reactstrap";
import "./Collapses.css";
import phone from "../../imgcollapses/call.png";
import address from "../../imgcollapses/location.png";
import facebook from "../../imgcollapses/facebook.png";
class Collapses extends Component {
  render() {
    return (
      <Container>
        <CardColumns>
          <Card>
            <CardImg
              className="address"
              top
              width=""
              src={address}
              alt="Card image cap"
            />
            <CardTitle>Card title</CardTitle>
          </Card>
          <Card>
            <CardImg
              className="phone"
              top
              width=""
              src={phone}
              alt="Card image cap"
            />
            <CardTitle>Card title</CardTitle>
          </Card>
          <Card>
            <CardImg
              className="facebook"
              top
              width=""
              src={facebook}
              alt="Card image cap"
            />
            <CardTitle>Card title</CardTitle>
          </Card>
        </CardColumns>
      </Container>
    );
  }
}
export default Collapses;
