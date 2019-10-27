import React, { Component } from "react";
import { Container, Card, CardText, CardTitle } from "reactstrap";
import ff_duck from "../../imgfastfoood/ข้าวหน้าเป็ด.png";
import BTBasket from "../BTBasket/BTBasket";
export default class Fast_Duck extends Component {
  state = {
    menu_name: "fast_duck",
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
              <div className="pic_buk">
                <img className="img_ffduck" src={ff_duck} />
              </div>
              <CardTitle className="text_menuname">ข้าวหน้าเป็ด</CardTitle>
              <CardText>ราคา 50 .-</CardText>
              <BTBasket />
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}
