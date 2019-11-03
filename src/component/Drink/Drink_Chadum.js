import React, { Component } from "react";
import { Container, Card, CardText, CardTitle, Button } from "reactstrap";
import chadum from "../../imgdrink/ชาดำเย็น.png";
import BTBasket from "../BTBasket/BTBasket";
export default class Drink_Greentea extends Component {
  state = {
    menu_name: "ชาดำเย็น",
    menu_value: 0,
    menu_price: 30
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
          <div className="form-menu">
            <Card body>
              <div>
                <img className="img_chadum img-fluid" src={chadum} />
              </div>
              <CardTitle className="text_menuname">ชาดำเย็น</CardTitle>
              <CardText className="text_price">ราคา 30 .-</CardText>
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
