import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  Button,
  row,
  col,
  Container
} from "reactstrap";
import "./Menu.css";
class Menu extends Component {
  render() {
    return (
      <div>
        <Container>
        <h1 className="new-menu"> เมนูแนะนำ</h1>
        </Container>
     </div>
 
    );
  }
}
export default Menu;
