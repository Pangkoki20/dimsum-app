import React, { Component } from "react";
import { Container, Card, CardText, CardTitle, Button } from "reactstrap";
import dl_poo from "../../imgdimsum/ขนมจีบปู.png";
export default class PooDumpling extends Component {
  state = {
    menu_name: "ขนมจีบปู",
    menu_value: 0,
    menu_price: 20,
  };
  sentOrder = (e) => {
    e.preventDefault();
    var oldItems = JSON.parse(localStorage.getItem("order")) || [];
    let uid = localStorage.getItem("user_id");
    console.log("sent !");

    const newData = {
      menu_name: this.state.menu_name,
      menu_value: 1,
      menu_price: this.state.menu_price,
      user_id: uid,
    };
    const isHaveMenuAlready = oldItems.find(
      (menu) => menu.menu_name === this.state.menu_name
    );
    if (!isHaveMenuAlready) {
      oldItems.push(newData);
      localStorage.setItem("order", JSON.stringify(oldItems));
      console.log(" data : ", newData);
      this.setState({ menu_value: 0 });
      this.setState({ remark: "" });
      window.location.reload();
    }
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
            <Card body className="border border-info">
              <div className="pic_dlpoo row justify-content-md-center">
                <img className="img_poo img-fluid" src={dl_poo} alt="" />
              </div>
              <CardTitle className="text_menuname">ขนมจีบปู</CardTitle>
              <CardText className="text_price">ราคา 20 .-</CardText>
              <Button
                onClick={this.sentOrder}
                color="info"
                className="btn-basket  bg-primary text-white"
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