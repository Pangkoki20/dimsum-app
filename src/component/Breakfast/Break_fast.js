import React, { Component } from "react";
import { Container, Card, CardText, CardTitle, Button } from "reactstrap";
import bf_bf from "../../imgbreakfast/อาหารเช้า.png";
import BTBasket from "../BTBasket/BTBasket";
export default class Break_fast extends Component {
  state = {
    menu_name: "อาหารเช้า",
    menu_value: 0,
    menu_price: 40
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
              <div className="pic_bf">
                <img className="img_bf img-fluid" src={bf_bf} />
              </div>
              <CardTitle className="text_menuname">ชุดอาหารเช้า</CardTitle>
              <CardText className="text_price">ราคา 40 .-</CardText>
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
