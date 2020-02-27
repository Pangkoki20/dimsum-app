import React, { Component } from "react";
import { Container, Card, CardText, CardTitle, Button } from "reactstrap";
import dl_pokegg from "../../imgdimsum/ขนมจีบหมูไข่เค็ม.png";
import BTBasket from "../BTBasket/BTBasket";
export default class Porkegg extends Component {
  state = {
    menu_name: "ขนมจีบหมูไข่เค็ม",
    menu_value: 0,
    menu_price: 20
  };

  sentOrder = e => {
    e.preventDefault();

    var oldItems = JSON.parse(localStorage.getItem("order")) || [];

    console.log("sent !");

    const newData = {
      menu_name: this.state.menu_name,
      menu_value: 1,
      menu_price: this.state.menu_price
    };
    const isHaveMenuAlready = oldItems.find(
      menu => menu.menu_name === this.state.menu_name
    );

    if (!isHaveMenuAlready) {
      oldItems.push(newData);
      localStorage.setItem("order", JSON.stringify(oldItems));
      console.log(" data : ", newData);
      this.setState({ menu_value: 0 });
      this.setState({ remark: "" });
    }
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
          <div className="form-menu">
            <Card body>
              <div className="pic_pokegg">
                <img className="img_pokegg img-fluid" src={dl_pokegg} />
              </div>
              <CardTitle className="text_menuname">ขนมจีบหมูไข่เค็ม</CardTitle>
              <CardText className="text_price">ราคา 20 .-</CardText>
              <Button
                onClick={this.sentOrder}
                color="info"
                className="btn-basket"
              >
                เพิ่มไปยังตะกร้า
              </Button>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}
