import React, { Component } from "react";
import { Container, Card, CardText, CardTitle, Button } from "reactstrap";
import gt from "../../imgdrink/ชาเย็นนน.png";
import axios from "axios";
export default class DrinkChaice extends Component {
  state = {
    menu_name: "ชาเย็น",
    menu_value: 0,
    menu_price: 30,
  };
  sentOrder = async (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    if (token) {
      if (token !== null) {
        this.setState({ check: "login" });
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
      }
      let res = await axios.post(`http://localhost:3001/api/users/me`, {
        token,
      });
      this.setState({ user: res.data });
    } else {
      window.location.href = "/login";
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
              <div className="pic_buk row justify-content-md-center">
                <img className="img_gt img-fluid" src={gt} alt="" />
              </div>
              <CardTitle className="text_menuname">ชาเย็น</CardTitle>
              <CardText className="text_price">ราคา 30 .-</CardText>
              <Button
                onClick={this.sentOrder}
                color="info"
                className="btn-basket bg-primary text-white"
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
