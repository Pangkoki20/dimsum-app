import React, { Component } from "react";
import { Container, Card, CardText, CardTitle, Button } from "reactstrap";
import "./Menu.css";
import axios from "axios";
import img_kanomgee from "../../imgfastfoood/ขนมจีนน้ำแกงปู.png";
class MenuNewKanomgee extends Component {
  state = { menu_name: "ขนมจีนน้ำแกงปู", menu_value: 0, menu_price: 50 };

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
          {/* <img className="img_menu" src={imgmenu} /> */}
          <div className="form-menu">
            <Card body className="border border-info">
              <div className="pic_kanomgee row justify-content-md-center">
                <img
                  className="img_kanomgee img-fluid "
                  src={img_kanomgee}
                  alt=""
                />
              </div>
              <CardTitle className="text_menuname">ขนมจีนน้ำแกงปู</CardTitle>
              <CardText className="text_price">ราคา 50 .-</CardText>
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
export default MenuNewKanomgee;
