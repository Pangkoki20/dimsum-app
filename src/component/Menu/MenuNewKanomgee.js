import React, { Component } from "react";
import { Container, Card, CardText, CardTitle, Button } from "reactstrap";
import "./Menu.css";
import img_kanomgee from "../../imgfastfoood/ขนมจีนน้ำแกงปู.png";
import BTBasket from "../BTBasket/BTBasket";

class MenuNewKanomgee extends Component {
  state = { menu_name: "hargao", menu_value: 0, menu_price: 50 };

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
              <div className="pic_kanomgee">
                <img className="img_kanomgee" src={img_kanomgee} />
              </div>
              <CardTitle className="text_menuname">ขนมจีนน้ำแกงปู</CardTitle>
              <CardText className="text_price">ราคา 50 .-</CardText>
              <Button onClick={this.sentOrder} color="info">
                เพิ่มไปยังตะกร้า
              </Button>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}
export default MenuNewKanomgee;
