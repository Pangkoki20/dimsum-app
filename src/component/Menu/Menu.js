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
        <div className="from_mn">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                หยิบใส่ตะกร้า
              </a>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
export default Menu;
