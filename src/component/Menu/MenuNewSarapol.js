import React, { Component } from "react";
import { Container, Card, CardText, CardTitle, Button } from "reactstrap";
import "./Menu.css";
import img_sarapol from "../../imgbreakfast/ซาลาเปาทอด.png";
import BTBasket from "../BTBasket/BTBasket";

class MenuNewSarapol extends Component {
  render() {
    return (
      <div>
        <Container>
          {/* <img className="img_menu" src={imgmenu} /> */}
          <div className="form-menu">
            <Card body>
              <div className="pic_egg">
                <img className="img_sarapol" src={img_sarapol} />
              </div>
              <CardTitle className="text_menuname">ซาลาเปาทอด</CardTitle>
              <CardText></CardText>
              <BTBasket />
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}
export default MenuNewSarapol;
