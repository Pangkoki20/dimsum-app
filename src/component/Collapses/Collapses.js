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
        <CardColumns className="from_colla">
          <Card>
            <a href="https://www.google.co.th/maps/@8.0604407,98.9973333,3a,75y,334.76h,89.22t/data=!3m6!1e1!3m4!1sfQG9FGsw3Sx8Gw5FBal8og!2e0!7i13312!8i6656?hl=th">
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
              />
            </a>
            <CardTitle className="text-phone">เบอร์โทรศัพท์</CardTitle>
          </Card>
          <Card>
            <a href="https://www.facebook.com/%E0%B8%95%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B8%8B%E0%B8%B3%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B9%8B%E0%B8%87-716044961896140/?epa=SEARCH_BOX">
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
