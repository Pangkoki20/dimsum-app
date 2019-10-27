import React, { Component } from "react";
import { Container, Card, CardText, CardTitle, Button } from "reactstrap";
import "./Menu.css";
import img_egg from "../../imgdrink/ไข่ลวก.png";
import BTBasket from "../BTBasket/BTBasket";

class MenuNewEgg extends Component {
  render() {
    return (
      <div>
        <Container>
          {/* <img className="img_menu" src={imgmenu} /> */}
          <div className="form-menu">
            <Card body>
              <div className="pic_egg">
                <img className="img_egg" src={img_egg} />
              </div>
              <CardTitle className="text_menuname">ไข่ลวก</CardTitle>
              <CardText className="text_price">ราคา 30 .-</CardText>
              <BTBasket />
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}
export default MenuNewEgg;
