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
import MenuSelect from "../MenuSelect/MenuSelect";

class Menu extends Component {
  render() {
    return (
      <div>
        <MenuSelect />
        <Container className="form-menu">
          <h1 className="text-menu">เมนูแนะนำ</h1>
          <img className="img_menu" src={imgmenu} />
          <div className="from_mn">
            <Row className="no-gutters ">
              <div class="col-md-4 border">
                <div className="from_menuone">
                  <img className="img_menu" src={imgmenu} />
                </div>
              </div>
              <div class="col-12 col-md-8 border">col-8</div>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
export default Menu;
