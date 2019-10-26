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
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary">
                  หยิบใส่ตะกร้า
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
export default Menu;
