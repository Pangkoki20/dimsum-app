import React, { Component } from "react";
import {} from "reactstrap";
import "./DeliveryFood.css";
import img_deliveryfood from "../../imgshop/delivery-man.png";
class DeliveryFood extends Component {
  render() {
    return (
      <div className="from_deliveryfood ">
        <img
          className=" img_deliveryfood img-fluid"
          src={img_deliveryfood}
          alt=""
        />
        <div className="text_deliveryfood">กำลังจัดส่งอาหาร</div>
      </div>
    );
  }
}
export default DeliveryFood;
