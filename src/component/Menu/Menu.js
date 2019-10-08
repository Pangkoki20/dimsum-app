import React, { Component } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Container
} from "reactstrap";
import "./Menu.css";
import imgmenu from "../../imgmenu/menu.png";

class Menu extends Component {
  render() {
    return (
      <Container>
        <div className="form-menu">
          <h1 className="text-menu">เมนูแนะนำ</h1>
          <img className="img_menu" src={imgmenu} />
        </div>
        <div>
          <h1 className="text_menucom">Comming Soon ...</h1>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Container>
    );
  }
}
export default Menu;
