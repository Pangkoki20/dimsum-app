import React, { Component } from "react";
import {} from "reactstrap";
import "./KitchenFoodFinish.css";
import cooking from "../../imgshop/cooking.png";
class KitchenFoodFinish extends Component {
  render() {
    return (
      <div className="from_cooking">
        <img className="cooking img-fluid" src={cooking} />
        <div className="text_cooking">จัดเตรียมอาหารเรียบร้อยแล้ว</div>
      </div>
    );
  }
}
export default KitchenFoodFinish;
