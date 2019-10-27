import React, { Component } from "react";
import {
  Row,
  Col,
  Container,
  Card,
  CardText,
  CardTitle,
  Button
} from "reactstrap";
import "./Menu.css";
import imgmenu from "../../imgmenu/menu.png";
import img_jopoo from "../../imgdimsum/จ๊อปูแนะนำ.png";
import BTBasket from "../BTBasket/BTBasket";

class MenuNewPoo extends Component {
  render() {
    return (
      <div>
        <Container>
          {/* <img className="img_menu" src={imgmenu} /> */}
          <div className="form-menu">
            <Card body>
              <div className="pic_jopoo">
                <img className="img_jopoo" src={img_jopoo} />
              </div>
              <CardTitle className="text_menuname">จ๊อปูทอด</CardTitle>
              <CardText>ราคา 50 .-</CardText>
              <BTBasket />
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}
export default MenuNewPoo;
