import React, { Component } from "react";
import { Container, Card, CardText, CardTitle,Button } from "reactstrap";
import dl_shrimp from "../../imgdimsum/เกี๊ยวกุ้ง.png";
export default class Shrimp_Dumling extends Component {
  state = {
    menu_name: "shrimp_dumlin",
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
              <div className="pic_hrimp">
                <img className="img_shrimp" src={dl_shrimp} />
              </div>
              <CardTitle className="text_menuname">เกี๊ยวกุ้ง</CardTitle>
              <CardText className="text_price">ราคา 20 .-</CardText>
              <Button onClick={this.sentOrder} color="info">
                เพิ่มไปยังตะกร้า
              </Button>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}
