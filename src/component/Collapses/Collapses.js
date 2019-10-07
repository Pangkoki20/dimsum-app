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
            <a href="">
              <CardImg
                className="address"
                top
                width=""
                src={address}
                alt="Card image cap"
              />
            </a>
            <CardTitle className="text-address">ที่อยู่ร้าน</CardTitle>
          </Card>
          <Card>
            <a href="">
              <CardImg
                className="phone"
                top
                width=""
                src={phone}
                alt="Card image cap"
              />{" "}
            </a>
            <CardTitle className="text-phone">เบอร์โทรศัพท์</CardTitle>
          </Card>
          <Card>
            <a href="">
              <CardImg
                className="facebook"
                top
                width=""
                src={facebook}
                alt="Card image cap"
              />
            </a>
            <CardTitle className="text-facebook">Facebook</CardTitle>
          </Card>
        </CardColumns>
      </Container>
    );
  }
}
export default Collapses;
