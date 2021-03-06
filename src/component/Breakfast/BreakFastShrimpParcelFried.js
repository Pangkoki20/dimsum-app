import React, { Component } from "react";
import { Container, Card, CardText, CardTitle, Button } from "reactstrap";
import bf_bf from "../../imgbreakfast/ถุงทองกุ้ง.png";
import axios from "axios";
export default class BreakFastShrimpParcelFried extends Component {
  state = {
    menu_name: "ถุงทองกุ้งทอด",
    menu_value: 0,
    menu_price: 40,
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
        console.log("check data" + isHaveMenuAlready);
        if (!isHaveMenuAlready) {
          oldItems.push(newData);
          localStorage.setItem("order", JSON.stringify(oldItems));
          console.log(" data : ", newData);
          this.setState({ menu_value: 0 });
          this.setState({ remark: "" });
          window.location.reload();
        } else {
          console.log("plus in basket");

          oldItems.map((item, index) => {
            //console.log(item.menu_value);
            if (newData.menu_name === item.menu_name) {
              item.menu_value++;
            }
            console.log(item);
          });
          console.log("new plus: " + oldItems);
          //oldItems.push(newData);
          localStorage.setItem("order", JSON.stringify(oldItems));
        }
      }
      window.location.reload();
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
              <div className="pic_bf row justify-content-md-center">
                <img className="img_bf img-fluid" src={bf_bf} alt="" />
              </div>
              <CardTitle className="text_menuname">ถุงทองกุ้งทอด</CardTitle>
              <CardText className="text_price">ราคา 40 .-</CardText>
              <Button
                onClick={this.sentOrder}
                color="info"
                className="btn-basket bg-primary text-white"
              >
                <div className="bt_basket">เพิ่มไปยังตะกร้า</div>
              </Button>
            </Card>
          </div>

          <br></br>
          <br></br>
        </Container>
      </div>
    );
  }
}
