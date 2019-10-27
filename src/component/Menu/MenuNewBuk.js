import React, { Component } from "react";
import { Container, Card, CardText, CardTitle } from "reactstrap";
import "./Menu.css";
import img_buk from "../../imgfastfoood/บะกุ๊ดเต๋แนะนำ.png";
import BTBasket from "../BTBasket/BTBasket";

class MenuNewBuk extends Component {
  render() {
    return (
      <div>
        <Container>
          <div className="form-menu">
            <Card body>
              <div className="pic_buk">
                <img className="img_buk" src={img_buk} />
              </div>
              <CardTitle className="text_menuname">บะกุ๊ดเต๋</CardTitle>
              <CardText>ราคา 50 .-</CardText>
              <BTBasket />
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}
export default MenuNewBuk;
