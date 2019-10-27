import React, { Component } from "react";
import { Container, Card, CardText, CardTitle } from "reactstrap";
import ff_crispypork from "../../imgfastfoood/ข้าวหมูกรอบ.png";
import BTBasket from "../BTBasket/BTBasket";
export default class Fast_Crispypork extends Component {
  state = {
    menu_name: "fast_crispypork",
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
                <img className="img_ffcrispypork" src={ff_crispypork} />
              </div>
              <CardTitle className="text_menuname">ข้าวหมูกรอบ</CardTitle>
              <CardText className="text_price">ราคา 50 .-</CardText>
              <BTBasket />
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}
