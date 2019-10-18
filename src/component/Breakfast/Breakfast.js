import React, { Component } from "react";
import { Container, Table, Button } from "reactstrap";
import "./Breakfast.css";
import Paginat from "../Paginat/Paginat";
import BTHome from "../BTHome/BTHome";
import Break_fast from "./Break_fast";
import Break_egg from "./Break_egg";
import Break_fish from "./Break_fish";
import Break_shrimp from "./Break_shrimp";
import bt_shop from "../../imgshop/shopping-basket.png";

class Breakfast extends Component {
  componentDidMount() {
    document.title = "Dimsumahkong Delivery";
    // var oldItems = []
    var oldItems = JSON.parse(localStorage.getItem("order"));
    console.log("old first :", oldItems);

    if (oldItems == null) {
      var oldItems = [];
      localStorage.setItem("order", JSON.stringify(oldItems));
    } else {
      var oldItems = JSON.parse(localStorage.getItem("order")) || [];
    }
    // var oldItems = JSON.parse(localStorage.getItem('order')) || [];
  }
  render() {
    return (
      <div class="container-fluid">
        <div class="card shadow-lg p-3 mb-5 bg-white rounded">
          <div class="d-flex bd-highlight textname-breakfast">
            <div class="p-2 w-100 bd-highlight ">
              อาหารเช้า
            </div>
            <div class="p-2 flex-shrink-1 bd-highlight">
              <img className="bt_shop" src={bt_shop} />
            </div>
          </div>
          <Table hover className="table-breakfast">
            <thead className="thead-bar">
              <tr>
                <th></th>
                <th>ชื่ออาหารเช้า</th>
                <th>ราคา</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="tabel-breakfast">
              <Break_fast />
              <Break_egg />
              <Break_fish />
              <Break_shrimp />
            </tbody>
          </Table>
        </div>
        <Paginat />
        <BTHome />
      </div>
    );
  }
}
export default Breakfast;
