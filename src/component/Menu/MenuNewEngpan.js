import React, { Component } from "react";
import { Container, Card, CardText, CardTitle, Button } from "reactstrap";
import "./Menu.css";
import img_eggpan from "../../imgfastfoood/ไข่กะทะ.png";
import BTBasket from "../BTBasket/BTBasket";

class MenuNewEggpan extends Component {
  render() {
    return (
      <div>
        <Container>
          {/* <img className="img_menu" src={imgmenu} /> */}
          <div className="form-menu">
            <Card body>
              <div className="pic_eggpan">
                <img className="img_eggpan" src={img_eggpan} />
              </div>
              <CardTitle className="text_menuname">ไข่กะทะ</CardTitle>
              <CardText>ราคา 40 .-</CardText>
              <BTBasket />
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}
export default MenuNewEggpan;
