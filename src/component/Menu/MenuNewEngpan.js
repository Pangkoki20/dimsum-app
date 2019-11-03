import React, { Component } from "react";
import { Container, Card, CardText, CardTitle, Button } from "reactstrap";
import "./Menu.css";
import img_eggpan from "../../imgfastfoood/ไข่กะทะ.png";
import BTBasket from "../BTBasket/BTBasket";

class MenuNewEggpan extends Component {
  state = { menu_name: "hargao", menu_value: 0, menu_price: 40 };

  sentOrder = e => {
    e.preventDefault();

    var oldItems = JSON.parse(localStorage.getItem("order")) || [];

    console.log("sent !");

    const newData = {
      menu_name: this.state.menu_name,
      menu_value: 1,
      menu_price: this.state.menu_price
    };
    oldItems.push(newData);
    localStorage.setItem("order", JSON.stringify(oldItems));
    console.log(" data : ", newData);
    this.setState({ menu_value: 0 });
    this.setState({ remark: "" });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.setState({ please: "" });
    console.log({ [name]: value });
  };
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
              <CardText className="text_price">ราคา 40 .-</CardText>
              <BTBasket />
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}
export default MenuNewEggpan;
