import React, { Component } from "react";
import { Container, Card, CardText, CardTitle } from "reactstrap";
import chamanow from "../../imgdrink/ชามะนาว.png";
import BTBasket from "../BTBasket/BTBasket";
export default class Drink_Coffee extends Component {
  state = {
    menu_name: "drink_chamanow",
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
                <img className="img_chamanow" src={chamanow} />
              </div>
              <CardTitle className="text_menuname">ชามะนาวเย็น</CardTitle>
              <CardText className="text_price">ราคา 30 .-</CardText>
              <BTBasket />
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}
