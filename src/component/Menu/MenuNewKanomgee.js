import React, { Component } from "react";
import { Container, Card, CardText, CardTitle, Button } from "reactstrap";
import "./Menu.css";
import img_kanomgee from "../../imgfastfoood/ขนมจีนน้ำแกงปู.png";
import BTBasket from "../BTBasket/BTBasket";

class MenuNewKanomgee extends Component {
  render() {
    return (
      <div>
        <Container>
          {/* <img className="img_menu" src={imgmenu} /> */}
          <div className="form-menu">
            <Card body>
              <div className="pic_kanomgee">
                <img className="img_kanomgee" src={img_kanomgee} />
              </div>
              <CardTitle className="text_menuname">ขนมจีนน้ำแกงปู</CardTitle>
              <CardText className="text_price">ราคา 50 .-</CardText>
              <BTBasket />
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}
export default MenuNewKanomgee;
