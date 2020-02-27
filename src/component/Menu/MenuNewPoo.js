import React, { Component } from "react";
import {
  Row,
  Col,
  Container,
  Card,
  CardText,
  CardTitle,
  Button
} from "reactstrap";
import "./Menu.css";
import imgmenu from "../../imgmenu/menu.png";
import img_jopoo from "../../imgdimsum/จ๊อปูแนะนำ.png";
import BTBasket from "../BTBasket/BTBasket";

class MenuNewPoo extends Component {
  state = { menu_name: "จ๊อปู", menu_value: 0, menu_price: 100 };

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
          {/* <img className="img_menu" src={imgmenu} /> */}
          <div className="form-menu">
            <Card body>
              <div className="pic_jopoo">
                <img className="img_jopoo img-fluid" src={img_jopoo} />
              </div>
              <CardTitle className="text_menuname">จ๊อปูทอด</CardTitle>
              <CardText className="text_price">ราคา 100 .-</CardText>
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
export default MenuNewPoo;
