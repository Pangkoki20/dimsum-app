import React, { Component } from "react";
import { Container, Card, CardText, CardTitle, Button } from "reactstrap";
import "./Menu.css";
import img_sarapol from "../../imgbreakfast/ซาลาเปาทอด.png";
class MenuNewSarapol extends Component {
  state = {
    menu_name: "ซาลาเปาทอด",
    menu_value: 0,
    menu_price: 10,
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
    const isHaveMenuAlready = oldItems.find(
      (menu) => menu.menu_name === this.state.menu_name
    );

    if (!isHaveMenuAlready) {
      oldItems.push(newData);
      localStorage.setItem("order", JSON.stringify(oldItems));
      console.log(" data : ", newData);
      this.setState({ menu_value: 0 });
      this.setState({ remark: "" });
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
          {/* <img className="img_menu" src={imgmenu} /> */}
          <div className="form-menu">
            <Card body>
              <div className="pic_egg row justify-content-md-center">
                <img
                  className="img_sarapol img-fluid"
                  src={img_sarapol}
                  alt=""
                />
              </div>
              <CardTitle className="text_menuname">ซาลาเปาทอด</CardTitle>
              <CardText className="text_price">ราคา 10 .-</CardText>
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
export default MenuNewSarapol;
