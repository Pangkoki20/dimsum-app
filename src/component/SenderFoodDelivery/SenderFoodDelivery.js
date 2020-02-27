import React, { Component } from "react";
import {} from "reactstrap";
import "./SenderFoodDelivery.css";
import img_fooddelivery from "../../imgshop/img_fooddelivery.png";
class SenderFoodDelivery extends Component {
  render() {
    return (
      <div className="img_fooddelivery">
        <img className=" img-fluid" src={img_fooddelivery} />
        <div className="text_fooddelivery">ส่งอาหารเรียบร้อยแล้ว</div>
      </div>
    );
  }
}
export default SenderFoodDelivery;
