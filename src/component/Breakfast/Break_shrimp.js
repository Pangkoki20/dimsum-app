import React, { Component } from "react";
import { Container, Card, CardText, CardTitle, Button } from "reactstrap";
import bf_shrimp from "../../imgbreakfast/กุ้งชุบแป้งทอด.png";
import BTBasket from "../BTBasket/BTBasket";
export default class Break_shrimp extends Component {
  state = {
    menu_name: "กุ้งชุบแป้งทอด",
    menu_value: 0,
    menu_price: 40,
  };

  sentOrder = (e) => {
    e.preventDefault();

    var oldItems = JSON.parse(localStorage.getItem("order")) || [];

    console.log("sent !");

    const newData = {
      menu_name: this.state.menu_name,
      menu_value: 1,
      menu_price: this.state.menu_price,
    };
    oldItems.push(newData);
    localStorage.setItem("order", JSON.stringify(oldItems));
    console.log(" data : ", newData);
    this.setState({ menu_value: 0 });
    this.setState({ remark: "" });
  };

  handleInputChange = (e) => {
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
              <div className="pic_buk row justify-content-md-center">
                <img
                  className="img_bfshrimp img-fluid"
                  src={bf_shrimp}
                  alt=""
                />
              </div>
              <CardTitle className="text_menuname">กุ้งชุบแป้งทอด</CardTitle>
              <CardText className="text_price">ราคา 40 .-</CardText>
              <Button
                onClick={this.sentOrder}
                color="info"
                className="btn-basket"
              >
                <div className="bt_basket">เพิ่มไปยังตะกร้า</div>
              </Button>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}
