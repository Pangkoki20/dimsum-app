import React, { Component } from "react";
import { Container, Card, CardText, CardTitle, Button } from "reactstrap";
import ff_babutte from "../../imgfastfoood/บะกุ๊ดเต๋.png";
export default class Fast_Babutte extends Component {
  state = {
    menu_name: "บะกุ๊ดเต๋",
    menu_value: 0,
    menu_price: 50,
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
          <div className="form-menu">
            <Card body>
              <div className="pic_buk row justify-content-md-center">
                <img
                  className="img_ffbabutte img-fluid"
                  src={ff_babutte}
                  alt=""
                />
              </div>
              <CardTitle className="text_menuname">บะกุ๊ดเต๋</CardTitle>
              <CardText className="text_price">ราคา 50 .-</CardText>
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
